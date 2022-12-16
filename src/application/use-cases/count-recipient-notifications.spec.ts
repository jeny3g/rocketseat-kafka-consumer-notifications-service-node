import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@tests/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('CountRecipientNotifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    const notification = new Notification({
      recipientId: 'recipient-id-1',
      content: new Content('Nova solicitação de amizade'),
      category: 'friendship-request',
    });

    const notification2 = new Notification({
      recipientId: 'recipient-id-2',
      content: new Content('Nova solicitação de amizade'),
      category: 'friendship-request',
    });

    await notificationsRepository.create(notification);
    await notificationsRepository.create(notification);
    await notificationsRepository.create(notification2);

    const response = await countRecipientNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    expect(response.count).toBe(2);
  });
});
