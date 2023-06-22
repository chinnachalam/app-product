export class Notification {
  public message: string;
  public status: string;
  public hide: boolean;

  constructor(message: string, status: string) {
    this.message = message;
    this.status = status;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
