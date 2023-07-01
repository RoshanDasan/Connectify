import { useEffect, useRef, useState } from 'react';
import './chat.css';
import { useDispatch, useSelector } from 'react-redux';
import { getChat } from '../../api/apiConnection/chatConnection';
import ChatList from '../../components/chat/ChatList';
import ChatBox from '../../components/chat/ChatBox';
import { io, Socket } from 'socket.io-client';
import { setCurrentChat, unsetNotificationOpen } from '../../state';
import Navbar from '../Navbar/Navbar';

const Chat = () => {
  const [chats, setChats] = useState([])
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const userId = useSelector((state: any) => state.user?._id);
  const token = useSelector((state: any) => state.token);
  // const notification = useSelector((state: any) => state.notifications);
  const socket = useRef<Socket | null>(null);
  const currentchatstate: any = useSelector((state: any) => state.currentchat);
  const dispatch = useDispatch();

  const handleCurrentChat = (chat: any) => {
    dispatch(setCurrentChat({ currentchat: chat }));
  };

  useEffect(() => {
    socket.current = io("https://connectfy.online", { transports: ['websocket'] });

    if (userId) {

      socket.current.emit('new-user-add', userId);

      socket.current.on('get-users', (users: any) => {
        setOnlineUsers(users);
      });
    }

    socket.current.on('connect', () => {
      console.log('Connected to the server');
    });

    socket.current.on('connect_error', (error) => {
      console.error('Connection error:', error);
      // Add error handling logic here
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [userId]);


  useEffect(() => {
    if (sendMessage !== null) {
      socket.current?.emit('send-message', sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    const receiveMessageHandler = (data: any) => {

      setReceiveMessage(data);
    };

    socket.current?.on('receive-message', receiveMessageHandler);

    return () => {
      socket.current?.off('receive-message', receiveMessageHandler);
    };
  }, []);

  useEffect(() => {
    dispatch(unsetNotificationOpen());
  }, []);

  const getChatList = async () => {
    try {
      const { chats } = await getChat(userId, token);
      console.log(chats, 'chats');

      setChats(chats);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {


    if (userId) {
      getChatList();
    }
  }, [currentchatstate, token, userId]);

  const checkOnline = (chat: any) => {
    const chatMember = chat?.members.find((member: any) => member !== userId);
    const online = onlineUsers?.find((user: any) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <>
      <Navbar />
      <div className="Chat">
        <div className="Left-side-chat">
          <div className="Chat-container">
            <h2>Chats</h2>
            <div className="Chat-list">
              {chats.map((chat: any) => (
                <div
                  key={chat._id}
                  onClick={() => handleCurrentChat(chat)}
                  style={{ cursor: 'pointer' }}
                >
                  <ChatList
                    data={chat}
                    userId={userId}
                    token={token}
                    online={checkOnline(chat)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="Right-side-chat">
          <div>
            <ChatBox
              chat={currentchatstate}
              currentUser={userId}
              setSendMessage={setSendMessage}
              receiveMessage={receiveMessage}
              online={checkOnline(currentchatstate)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
