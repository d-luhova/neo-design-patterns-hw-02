import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";

const user = new User(
  "example@email.com",
  "+380123456789",
  "device-token-abc"
);

const logger = new Logger();

const channels = [
  new EmailNotification(logger),
  new SMSNotification(logger),
  new PushNotification(logger)
];

const notifier = new NotificationService(channels);
notifier.notify(user, "Ваш платіж оброблено успішно!");