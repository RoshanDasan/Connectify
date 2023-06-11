import { useEffect, useRef, useState } from 'react';
import './chat.css';
import { TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { getChat } from '../../api/apiConnection/chatConnection';
import ChatList from '../../components/chat/ChatList';
import ChatBox from '../../components/chat/ChatBox';
import { io, Socket } from 'socket.io-client';

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const userId = useSelector((state: any) => state.user._id);
  const token = useSelector((state: any) => state.token);
  const socket = useRef<Socket | null>(null);

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

  return (
    <div className="Chat" style={{ marginTop: '6rem' }}>
      <div className="Left-side-chat">
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat: any) => (
              <div key={chat._id} onClick={() => setCurrentChat(chat)} style={{ cursor: 'pointer' }}>
                <ChatList data={chat} userId={userId} token={token} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Right-side-chat">
        <div>
          <ChatBox chat={currentChat} currentUser={userId} setSendMessage={setSendMessage} receiveMessage={receiveMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
