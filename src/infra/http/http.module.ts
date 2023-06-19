import { UnreadNotification } from './../../app/use-cases/unread-notification';
import { GetRecipientNotification } from './../../app/use-cases/get-recpient-notification';
import { CountRecipientNotification } from './../../app/use-cases/count-recipient-notification';
import { CancelNotification } from './../../app/use-cases/cancel-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { ReadNotification } from '@app/use-cases/read-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
