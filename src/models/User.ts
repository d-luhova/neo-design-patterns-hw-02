import { NotificationService } from "../services/NotificationService";

export class User {
  constructor(
    public email: string,
    public phone: string,
    public deviceToken: string
  ) {}
}