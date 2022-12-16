import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotificationFactory(override: Override = {}) {
  const notification = new Notification({
    recipientId: 'recipient-id',
    content: new Content('Voce tem uma nova mensagem'),
    category: 'category',
    ...override,
  });

  return notification;
}
