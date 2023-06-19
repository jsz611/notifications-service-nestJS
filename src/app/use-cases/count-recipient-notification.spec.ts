import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications';
import { CountRecipientNotification } from './count-recipient-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('count recipient  notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(
      notificationsRepository,
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );
    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });
    expect(count).toEqual(2);
  });
});
