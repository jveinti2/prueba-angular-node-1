import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    return this.http.get(`${this.API_URL}/users`);
  }
  getUser(id: number) {
    return this.http.get(`${this.API_URL}/users/${id}`);
  }
  createUser(user: User) {
    return this.http.post(`${this.API_URL}/users`, user);
  }

  updateUser(user: User, id: number) {
    return this.http.put(`${this.API_URL}/users/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.API_URL}/users/${id}`);
  }
}
