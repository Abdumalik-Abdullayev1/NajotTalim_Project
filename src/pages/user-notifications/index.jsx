import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NotificationContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const NotificationItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.read ? '#e6ffe6' : '#ffe6e6'};
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const NotificationStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

function Notifications() {
  const [socket, setSocket] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const newSocket = new WebSocket('ws://your-api-domain.com/ws');
    
    newSocket.onopen = () => {
      const token = 'YOUR_AUTH_TOKEN_HERE';
      newSocket.send(JSON.stringify({ type: 'auth', token: token }));
    };

    newSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setNotifications(data.notifications);
    };

    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const markAsRead = (id) => {
    if (socket) {
      socket.send(JSON.stringify({ action: 'markAsRead', id: id }));
      setNotifications(prevNotifications =>
        prevNotifications.map(notification =>
          notification.id === id ? { ...notification, read: true } : notification
        )
      );
    }
  };

  const totalNotifications = notifications.length;
  const readNotifications = notifications.filter(n => n.read).length;
  const unreadNotifications = totalNotifications - readNotifications;

  return (
    <NotificationContainer>
      <h2>Bildirishnomalar</h2>
      <NotificationStats>
        <span>Jami: {totalNotifications}</span>
        <span>O'qilgan: {readNotifications}</span>
        <span>O'qilmagan: {unreadNotifications}</span>
      </NotificationStats>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          read={notification.read}
          onClick={() => markAsRead(notification.id)}
        >
          {notification.message}
        </NotificationItem>
      ))}
    </NotificationContainer>
  );
}

export default Notifications;
