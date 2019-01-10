import { Injectable } from '@angular/core';

// add imports
import { HttpClient, HttpHeaders } from '@angular/common/http';

const RoutesApi = {
  users: 'users',
  login: 'login',
  signup: 'signup'
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private UriApi = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public login(user: any) {

    let uri = `${this.UriApi}/${RoutesApi.login}`;

    return this.http.post(uri, JSON.stringify(user), this.loadHeaders());

  }

  private loadHeaders(token: string = '') {

    let headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': `${token}`
    });

    return { headers: headers };
  }

  public getUsers(token: string = '') {

    let uri = `${this.UriApi}/${RoutesApi.users}`;

    return this.http.get<Array<any>>(uri, this.loadHeaders(token));
    
  }

}
