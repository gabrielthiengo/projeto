/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');
      const data = response.data.map(notify => ({
        ...notify,
        timeDistance: formatDistance(parseISO(notify.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notify =>
        notify._id === id ? { ...notify, read: true } : notify
      )
    );
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notify => (
            <Notification key={notify._id} unread={!notify.read}>
              <p>{notify.content}</p>
              <time>{notify.timeDistance}</time>
              {!notify.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notify._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
