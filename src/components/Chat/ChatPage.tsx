import { Box } from '@mui/material';
import React, { FormEvent, useEffect, useState } from 'react';




type MessageDataType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
}

const ChatPage: React.FC = React.memo(() => {
  const [messages, setMessages] = useState<Array<MessageDataType>>([]);
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const isDisabledButton = !(socket?.readyState === 1);
  const sendNewMessage = (message: string) => {
    if (socket) {
      socket.send(message);
    }
  }


  useEffect(() => {
    const onCloseWs = () => {
      setTimeout(() => {
        setSocket(null);
      }, 3000);
    };

    const onMessageWs = (e: MessageEvent) => {
      const newMessages: Array<MessageDataType> = JSON.parse(e.data);

      if (newMessages.length === 1) {
        setMessages((prevState) => [...prevState, ...newMessages]);
      } else {
        setMessages(newMessages);
      }
    };

    if (!socket) {
      const newChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
      newChannel.addEventListener('close', onCloseWs);
      newChannel.addEventListener('message', onMessageWs)

      setSocket(newChannel);
    }

    return () => {
      socket?.removeEventListener('close', onCloseWs);
      socket?.removeEventListener('message', onMessageWs);
      socket?.close();
    };
  }, [socket]);


  return (
    <>
      <MessagesList messages={messages} />
      <SendMessageForm sendNewMessage={sendNewMessage} isDisabledButton={isDisabledButton} />
    </>
  );
});



type MessagesListPropsType = {
  messages: Array<MessageDataType>;
}

const MessagesList: React.FC<MessagesListPropsType> = React.memo(({ messages }) => {
  return (
    <Box
      component='ul'
      sx={{ 
        width: '100%', 
        height: '70vh', 
        margin: '0',
        borderRadius: '10px',
        bgcolor: 'grey.700',
        color: 'grey.50',
        listStyle: 'none',
        overflowY: 'scroll' ,
      }}
    >
      {
        messages.map((item: MessageDataType, index: number) => {
          return (
            <Message key={index} messageData={item} />
          );
        })
      }
    </Box>
  );
});



type MessagePropsType = {
  messageData: MessageDataType;
}

const Message: React.FC<MessagePropsType> = React.memo(({ messageData }) => {
  const { photo, userName, message } = messageData;

  return (
    <li>
      <div>
        {
          photo
            ? <img src={`${photo}`} alt="Avatar" style={{ width: '30px', height: '30px' }} />
            : <div style={{ width: '30px', height: '30px', backgroundColor: 'green' }}></div>
        }
        {userName}
      </div>
      <div>
        {message}
      </div>
      <hr />
    </li>
  );
});



type SendMessageFormPropsType = {
  sendNewMessage: (message: string) => void;
  isDisabledButton: boolean;
}

const SendMessageForm: React.FC<SendMessageFormPropsType> = React.memo(({ sendNewMessage, isDisabledButton }) => {
  const [newMessage, setNewMessage] = useState('');

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    if (!newMessage) {
      return;
    }
    sendNewMessage(newMessage);
    setNewMessage('');
  }

  return (
    <form onSubmit={onSubmitForm}>
      <textarea onChange={(e) => setNewMessage(e.target.value)} value={newMessage} name="newMessage"></textarea>
      <button disabled={isDisabledButton}>Send</button>
    </form>
  );
});

export default ChatPage;