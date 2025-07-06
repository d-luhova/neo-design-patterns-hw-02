import { User } from "../models/User";
import { INotificationChannel } from "../core/interfaces";

export class NotificationService {
    constructor(private channels: INotificationChannel[]) {}

    notify(user: User, message: string): void {
      for (const channel of this.channels) {
        channel.send(user, message);
      }
    }
}
