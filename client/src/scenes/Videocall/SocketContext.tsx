import React, { useState, useRef, useEffect, createContext, ReactNode } from "react";
import { io, Socket } from "socket.io-client";
import { SignalData } from 'simple-peer';
import Peer from 'simple-peer/simplepeer.min.js';


interface Call {
  isRecieveCall: boolean;
  from: string;
  name: string;
  signal: SignalData;
}

interface ContextProps {
  call: Call;
  callAccepted: boolean;
  myvideo: any;
  userVideo: React.RefObject<HTMLVideoElement>;
  stream: MediaStream | null;
  name: string;
  setName: (name: string) => void;
  callEnded: boolean;
  me: string | null;
  callUser: (id: string) => void;
  leaveCall: () => void;
  answerCall: () => void;
}

const SocketContext = createContext<ContextProps>({
  call: { isRecieveCall: false, from: "", name: "", signal: {} as SignalData },
  callAccepted: false,
  myvideo: null,
  userVideo: {} as React.RefObject<HTMLVideoElement>,
  stream: null,
  name: "",
  setName: () => { },
  callEnded: false,
  me: null,
  callUser: () => { },
  leaveCall: () => { },
  answerCall: () => { },
});

const socket: Socket = io(process.env.SERVER_URL);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [stream, setStream] = useState<MediaStream | any>(null);
  const [usersToCall, setUsersToCall] = useState([]);
  const [me, setMe] = useState<string | null>(null);
  const [call, setCall] = useState<Call>({ isRecieveCall: false, from: "", name: "", signal: {} as SignalData });
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState('');

  const myvideo = useRef<HTMLVideoElement>(null);
  const userVideo = useRef<HTMLVideoElement>(null);
  const connectionRef = useRef<Peer.Instance | null>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        if (currentStream) {
          myvideo.current.srcObject = currentStream;
        }
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error);
      });

    socket.on("me", (user: string) => setMe(user));


    socket.on("calluser", ({ from, name: callerName, signal }: Call) => {
      setCall({ isRecieveCall: true, from, name: callerName, signal });
    });

    return () => {
      socket.off("me");
      socket.off("calluser");
    };
  }, [name]);

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data: SignalData) => {
      socket.emit("answercall", { signal: data, to: call.from });
    });

    peer.on("stream", (currentStream: MediaStream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = currentStream;
      }
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id: string) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data: SignalData) => {
      socket.emit("calluser", { userToCall: id, signalData: data, from: me, name });
    });

    peer.on("stream", (currentStream: MediaStream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = currentStream;
      }
    });

    socket.on("callaccepted", (signal: SignalData) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    if (connectionRef.current) {
      connectionRef.current.destroy();
    }

  };

  const contextValue: ContextProps = {
    call,
    callAccepted,
    myvideo,
    userVideo,
    stream,
    name,
    setName,
    callEnded,
    me,
    callUser,
    leaveCall,
    answerCall
  };

  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
