import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ChatWindow from '../../components/Chat/ChatWindow/ChatWindow';
import MessageInput from '../../components/Chat/MessageInput/MessageInput';
import UserList from '../../components/Chat/UserList/UserList';
import styles from './Chat.module.css';

function Chat() {
  const [messages, setMessages] = useState([
    // Initial mock messages
    {
      id: 1,
      user: 'Alice',
      text: 'Hi everyone!',
      timestamp: '10:00 AM',
    },
    {
      id: 2,
      user: 'Bob',
      text: 'Hello Alice!',
      timestamp: '10:01 AM',
    },
  ]);

  const [users, setUsers] = useState([
    // Initial mock users
    {
      id: 1,
      name: 'Alice',
      avatar: '/assets/images/alice-avatar.jpg',
    },
    {
      id: 2,
      name: 'Bob',
      avatar: '/assets/images/bob-avatar.jpg',
    },
    {
      id: 3,
      name: 'Charlie',
      avatar: '/assets/images/charlie-avatar.jpg',
    },
  ]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className={styles.chatPage}>
      <Header />
      <main className={styles.mainContent}>
        <UserList users={users} />
        <div className={styles.chatSection}>
          <ChatWindow messages={messages} />
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Chat;
