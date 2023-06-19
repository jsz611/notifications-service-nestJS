import { NotificationNotFound } from './errors/notification-not-found';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
//import { Notification } from '../entities/notification';

interface CancelNotificationRequest {
  notificationId: string;
}
type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );
    if (!notification) {
      throw new NotificationNotFound();
    }
    notification.cancel();
    await this.notificationsRepository.save(notification);
  }
}
