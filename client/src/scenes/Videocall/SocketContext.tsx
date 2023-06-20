import React, { useState, useRef, useEffect, createContext, ReactNode } from "react";
import { io, Socket } from "socket.io-client";
import { SignalData } from 'simple-peer';
import Peer from 'simple-peer/simplepeer.min.js';
import { useSelector } from "react-redux";

interface Call {
  isReceiveCall: boolean;
  from: string;
  name: string;
  signal: SignalData;
}

interface ContextProps {
  call: Call;
  callAccepted: boolean;
  myVideo: React.RefObject<HTMLVideoElement>;
  userVideo: React.RefObject<HTMLVideoElement>;
  stream: MediaStream | null;
  name: string;
  userToCall: string;
  setUserToCall: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  callEnded: boolean;
  setMe: React.Dispatch<React.SetStateAction<string>>;
  activeForCall: any[];
  callUser: (id: string) => void;
  leaveCall: () => void;
  answerCall: () => void;
}

const SocketContext = createContext<ContextProps>({
  call: { isReceiveCall: false, from: "", name: "", signal: {} as SignalData },
  callAccepted: false,
  myVideo: {} as React.RefObject<HTMLVideoElement>,
  userVideo: {} as React.RefObject<HTMLVideoElement>,
  stream: null,
  name: "",
  userToCall: "",
  setUserToCall: () => { },
  setName: () => { },
  callEnded: false,
  setMe: () => { },
  activeForCall: [],
  callUser: () => { },
  leaveCall: () => { },
  answerCall: () => { },
});

const socket: Socket = io(process.env.SERVER_URL);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [me, setMe] = useState<string>('');
  const [call, setCall] = useState<Call>({ isReceiveCall: false, from: "", name: "", signal: {} as SignalData });
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState('');
  const [activeForCall, setActiveForCall] = useState<any[]>([]);
  const userId = useSelector((state: any) => state.user?._id);
  const [userToCall, setUserToCall] = useState('')

  const myVideo = useRef<HTMLVideoElement>(null);
  const userVideo = useRef<HTMLVideoElement>(null);
  const connectionRef = useRef<Peer.Instance | null>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        console.log(currentStream, 'stream');

        if (myVideo.current) {
          myVideo.current.srcObject = currentStream;
        }
        setStream(currentStream);
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error);
      });

    socket.on("calluser", ({ from, name: callerName, signal }: Call) => {
      setCall({ isReceiveCall: true, from, name: callerName, signal });
    });

    return () => {
      socket.off("calluser");
    };
  }, [userId, name]);

  useEffect(() => {
    if (userId) {
      socket.emit("me", userId);
      socket.on("activeforcall", (users) => {
        setActiveForCall(users);
      });
    }

    return () => {
      socket.disconnect();
    };
  }, [userId]);

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
      console.log(currentStream, 'opo stream');

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


    socket.emit("callend", userToCall);

    socket.on("callingcut", (_message) => {
      setCallEnded(true);
    });

    if (connectionRef.current) {
      connectionRef.current.destroy();
    }
  };

  const contextValue: ContextProps = {
    call,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    name,
    setName,
    callEnded,
    setMe,
    activeForCall,
    callUser,
    leaveCall,
    answerCall,
    userToCall,
    setUserToCall
  };

  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
