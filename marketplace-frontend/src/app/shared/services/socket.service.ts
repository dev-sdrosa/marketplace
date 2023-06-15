import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';


@Injectable({
    providedIn: 'root'
})
export class SocketWebService extends Socket {


    @Output() 
    outEven: EventEmitter<any> = new EventEmitter();

    constructor(
        public cookieService: CookieService,

    ) {
        super({
            url: 'http://3.87.231.179:5000',
            options: {
                extraHeaders: {
                    Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODIxYWFmYThjMWFhYjMzMDVmOTc5ZSIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY4Njc5NzcwNiwiZXhwIjoxNjg2ODA0OTA2fQ.InAlj3QbDXuB_QLSeBbLqvkUHaQwxcZAfm8xVdMuAvk"
                }
            }
        })
    }

    listen = () => {
        this.ioSocket.on('set-notification', res => this.outEven.emit(res));

    }
    emitEvent = (payload = {}) => {
        this.ioSocket.emit('set-notification', payload)

    }
}