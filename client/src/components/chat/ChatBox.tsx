import React, { useEffect, useState } from 'react';
import { getUser } from '../../api/apiConnection/userConnection';
import { useSelector } from 'react-redux';
import './chatBox.css';
import Flex from '../DisplayFlex';
import { Avatar, IconButton } from '@mui/material';
import { getMessages, sendMessage } from '../../api/apiConnection/chatConnection';
import { format } from 'timeago.js';
import { Send } from '@mui/icons-material';
import InputEmoji from 'react-input-emoji';

interface ChatBoxProps {
  chat: any;
  currentUser: string;
  setSendMessage: (message: any) => void;
  receiveMessage: any;
}

const ChatBox: React.FC<ChatBoxProps> = ({ chat, currentUser, setSendMessage, receiveMessage }) => {
  const [userData, setUserData] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const token = useSelector((state: any) => state.token);
  const userId = useSelector((state: any) => state.user._id);

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage?.chatId === chat?._id) {
      setMessages([...messages, receiveMessage]);
    }
  }, [receiveMessage]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { messages } = await getMessages(chat._id, token);
        setMessages(messages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [chat, token]);

  useEffect(() => {
    const user = chat?.members?.find((id: any) => id !== currentUser);
    const getUserData = async () => {
      try {
        const data = await getUser(user, token);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [chat, currentUser, token]);

  const handleMessageSubmit = async () => {
    try {
      await sendMessage({ chatId: chat._id, senderId: userId, message: newMessage }, token);
      setMessages([...messages, { senderId: userId, message: newMessage }]);
      setNewMessage('');
    } catch (error) {
      console.log(error);
    }

    // send message to socket server
    const receiverId = chat.members.find((id: string) => id !== userId);
    setSendMessage({ chatId: chat._id, senderId: userId, message: newMessage, receiverId });
  };

  return (
    <div className="ChatBox-container">
      <div className="chat-header">
        <div className="follower">
          <Flex sx={{ justifyContent: 'flex-start' }}>
            {userData?.dp ? (
              <div className="profile-picture">
                <Avatar alt={userData.userName} src={`http://localhost:5000/uploads/${userData.dp}`} sx={{ m: '10px' }} />
              </div>
            ) : (
              <Avatar alt={userData?.userName} sx={{ m: '10px' }} />
            )}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="name" style={{ fontSize: '0.8rem', fontStyle: 'initial' }}>
                {userData?.userName}
              </span>
              <span>Online</span>
            </div>
          </Flex>
        </div>
      </div>

      <div className="chat-body">
        {messages.map((message: any) => (
          <div className={message.senderId === currentUser ? 'message own' : 'message'} key={message.createdAt}>
            <span>{message.message}</span>
            <span>{format(message.createdAt)}</span>
          </div>
        ))}
      </div>

      <div className="chat-sender">
        <h1>+</h1>
        <InputEmoji value={newMessage} onChange={setNewMessage} />

        <IconButton onClick={handleMessageSubmit}>
          <Send />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatBox;
