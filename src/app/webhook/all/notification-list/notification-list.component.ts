import { Component } from '@angular/core';
import { Notification } from '../model/notification.model';


@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {
  notifications: Notification[] = [];

  addNotification() {
    this.notifications.unshift(
      new Notification(
        "notifcation: Hi All, Please submite details by today",
        "read"
      )
    );
  }

  deleteNotification() {
    this.notifications = [];
  }
}
