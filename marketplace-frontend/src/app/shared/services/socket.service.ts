import { EventEmitter, Injectable, Output } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class SocketWebService extends Socket {


    @Output() 
    outEven: EventEmitter<any> = new EventEmitter();

    constructor() {
        super({
            url: environment.SOCKET_URL,
            options: {
                extraHeaders: {
                    Authorization: "Bearer " + (localStorage.getItem('userData') != null ? JSON.parse(localStorage.getItem('userData'))._token : '')
                }
            }
        })
        this.listen()
    }

    listen = () => {
        this.ioSocket.on('set-notification', res => this.outEven.emit(res));

    }
    emitEvent = (payload = {}) => {
        this.ioSocket.emit('set-notification', payload)

    }
}