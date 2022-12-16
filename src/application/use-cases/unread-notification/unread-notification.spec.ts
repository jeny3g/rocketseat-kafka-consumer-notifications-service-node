import { makeNotificationFactory } from '@tests/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@tests/repositories/in-memory-notifications-repository';
import { NotificationNotFoundError } from '../errors/notification-not-found-error';
import { UnreadNotification } from './unread-notification';

describe('Unread Notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotificationFactory({
      readAt: new Date(),
    });

    notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    //persistir essa notificação

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFoundError);
  });
});
