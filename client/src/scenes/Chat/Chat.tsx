import { useEffect, useRef, useState } from 'react';
import './chat.css';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getChat } from '../../api/apiConnection/chatConnection';
import ChatList from '../../components/chat/ChatList';
import ChatBox from '../../components/chat/ChatBox';
import { io, Socket } from 'socket.io-client';
import { setCurrentChat } from '../../state';
import Navbar from '../Navbar/Navbar';


const Chat = () => {
  const [chats, setChats]: any = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const userId = useSelector((state: any) => state.user._id);
  const token = useSelector((state: any) => state.token);
  const socket = useRef<Socket | null>(null);
  const currentchatstate = useSelector((state: any) => state.currentchat)
  const dispatch = useDispatch()

  const handleCurrentChat = (chat: any) => {
    dispatch(setCurrentChat({ currentchat: chat }));
  }

  useEffect(() => {
    socket.current = io('http://localhost:5000');
    socket.current.emit('new-user-add', userId);
    socket.current.on('get-users', (users: any) => {
      setOnlineUsers(users);
    });
  }, [userId]);

  // send message to socket server
  useEffect(() => {
    if (sendMessage !== null) socket.current?.emit('send-message', sendMessage);
  }, [sendMessage]);

  // receive message from socket server
  useEffect(() => {
    socket.current?.on('receive-message', (data: any) => {
      setReceiveMessage(data);
    });
  }, []);

  useEffect(() => {
    const getChatList = async () => {
      try {
        const { chats } = await getChat(userId, token);
        setChats(chats);
      } catch (error) {
        throw error;
      }
    };
    getChatList();
  }, [userId]);

  const checkOnline = (chat: any) => {
    const chatMember = chat.members.find((member: any) => member !== userId);
    
    const online = onlineUsers.find((user: any) => user.userId === chatMember)
    
    
    return online? true : false;
  }


  

  return (
    <>
    <Navbar />
     <div className="Chat">
      <div className="Left-side-chat">
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat: any) => (
              <div key={chat._id} onClick={() => handleCurrentChat(chat)} style={{ cursor: 'pointer' }}>
                <ChatList data={chat} userId={userId} token={token} online={checkOnline(chat)}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Right-side-chat">
        <div>
          <ChatBox chat={currentchatstate} currentUser={userId} setSendMessage={setSendMessage} receiveMessage={receiveMessage} />
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Chat;
