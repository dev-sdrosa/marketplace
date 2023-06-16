import { Component, OnInit, ElementRef } from '@angular/core';
import { SocketWebService } from '../../services/socket.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications = [];
  openNotifications = false;

  constructor(
    private socketService: SocketWebService,
    private el: ElementRef
  ) {

  }

  ngOnInit(): void {
    this.socketService.emitEvent({'sada': 123});
    this.socketService.outEven.subscribe(res => {
      this.notifications.push(res);
      this.openNotifications = false;
    });
  }

  onDropdown(event: Event) {
    event.stopPropagation()

    let dropdown = (this.el.nativeElement as HTMLElement).querySelector('.dropdown-list');

    if (dropdown?.classList.contains('show-dropdown')) {
      dropdown?.classList.remove('show-dropdown');
    } else {
      dropdown?.classList.add('show-dropdown');
      this.openNotifications = true;
    }
  }
}
