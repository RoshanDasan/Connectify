import React, { useEffect, useState, useRef } from 'react';
import { getUser } from '../../api/apiConnection/userConnection';
import { useSelector } from 'react-redux';
import './chatBox.css';
import Flex from '../DisplayFlex';
import { Avatar, IconButton, Typography } from '@mui/material';
import { getMessages, sendMessage } from '../../api/apiConnection/chatConnection';
import { format } from 'timeago.js';
import { Send, PhotoCamera, VideoCall } from '@mui/icons-material';
import InputEmoji from 'react-input-emoji';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

interface ChatBoxProps {
  chat: any;
  currentUser: string;
  setSendMessage: (message: any) => void;
  receiveMessage: any;
}

const ChatBox: React.FC<ChatBoxProps> = ({ chat, currentUser, setSendMessage, receiveMessage, online }: any) => {
  const [userData, setUserData] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const token = useSelector((state: any) => state.token);
  const userId = useSelector((state: any) => state.user._id);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scroll = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage?.chatId === chat?._id) {
      setMessages((prevMessages) => [...prevMessages, receiveMessage]);
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
      setMessages((prevMessages) => [...prevMessages, { senderId: userId, message: newMessage }]);
      setNewMessage('');
    } catch (error) {
      console.log(error);
    }

    // send message to socket server
    const receiverId = chat.members.find((id: string) => id !== userId);
    setSendMessage({ chatId: chat._id, senderId: userId, message: newMessage, receiverId });
  };

  const handleFileInputChange = () => {
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      // Handle the selected file here (e.g., send it to the server)
      // You can use a file upload library or make a custom API call
    }
  };

  const handlePictureUpload = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="ChatBox-container">
      {chat ? (
        <>
          <div className="chat-header">
            <div className="follower">
              <Flex>
                <Flex sx={{ justifyContent: 'flex-start' }}>
                  {userData?.dp ? (
                    <div className="profile-picture">
                      <Avatar alt={userData.userName} src={userData.dp} sx={{ m: '10px' }} />
                    </div>
                  ) : (
                    <Avatar alt={userData?.userName} sx={{ m: '10px' }} />
                  )}


                  <Flex flexDirection={'column'}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className="name" style={{ fontSize: '0.8rem', fontStyle: 'initial' }}>
                        {userData?.userName}
                      </span>

                    </div>
                    {online ? (
                      <Typography>Online</Typography>
                    ) : (
                      <Typography>Offline</Typography>
                    )}

                  </Flex>

                </Flex>
                {/*  
                <IconButton onClick={() => online? navigate('/chat/video_call'): toast.error('user not available')}>
                  <VideoCall />
                </IconButton> */}

                <IconButton onClick={() => navigate('/chat/video_call')}>
                  <VideoCall />
                </IconButton>

              </Flex>

            </div>
          </div>

          <div className="chat-body">
            {messages.map((message: any, index: number) => (
              <div ref={index === messages.length - 1 ? scroll : null} className={message.senderId === currentUser ? 'message own' : 'message'} key={index}>
                <span>{message.message}</span>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
          </div>

          <div className="chat-sender">
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="image/*" onChange={handleFileInputChange} />
            <IconButton onClick={handlePictureUpload}>
              <PhotoCamera />
            </IconButton>
            <InputEmoji value={newMessage} onChange={setNewMessage} />

            <IconButton onClick={handleMessageSubmit}>
              <Send />
            </IconButton>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.5rem', color: '#888' }}>Tap to chat</div>
      )}
      <ToastContainer position='bottom-left' />
    </div>
  );
};

export default ChatBox;
