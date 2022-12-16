import { makeNotificationFactory } from '@tests/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@tests/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('CountRecipientNotifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotificationFactory({
        recipientId: 'recipient-id-1',
      }),
    );
    await notificationsRepository.create(
      makeNotificationFactory({
        recipientId: 'recipient-id-1',
      }),
    );
    await notificationsRepository.create(
      makeNotificationFactory({
        recipientId: 'recipient-id-2',
      }),
    );

    const response = await countRecipientNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    expect(response.count).toBe(2);
  });
});
