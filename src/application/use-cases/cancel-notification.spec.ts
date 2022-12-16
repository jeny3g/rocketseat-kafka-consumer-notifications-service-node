import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@tests/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFoundError } from './errors/notification-not-found-error';

describe('CancelNotification', () => {
  it('should cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      recipientId: 'recipient-id',
      content: new Content('Nova solicitação de amizade'),
      category: 'friendship-request',
    });

    await notificationsRepository.create(notification);

    await cancelNotification.execute({ notificationId: notification.id });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should throw an error if notification does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    await expect(
      cancelNotification.execute({ notificationId: 'fake-notification-id' }),
    ).rejects.toThrowError(NotificationNotFoundError);
  });
});
