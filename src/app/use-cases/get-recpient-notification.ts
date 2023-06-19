import { NotificationsRepository } from '../repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
import { Notification } from '@app/entities/notification';
//import { Notification } from '../entities/notification';

interface GetRecipientNotificationRequest {
  recipientId: string;
}
interface GetRecipientNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationRequest,
  ): Promise<GetRecipientNotificationResponse> {
    const { recipientId } = request;
    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);
    return {
      notifications,
    };
  }
}
