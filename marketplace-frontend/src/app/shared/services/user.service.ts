import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRP } from '../schemas/user.schema';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUser(userId: string) {
    return this.http.get<UserRP>(
      "api/user/" + userId, 
    //   { headers: {skip: "true"} }
    );
  }


}
