import { makeNotificationFactory } from '@tests/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@tests/repositories/in-memory-notifications-repository';
import { NotificationNotFoundError } from '../errors/notification-not-found-error';
import { ReadNotification } from './read-notification';

describe('Read Notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotificationFactory();

    notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    //persistir essa notificação

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFoundError);
  });
});
