import { Injectable } from '@angular/core';
import {HttpClient, HttpParamsOptions} from '@angular/common/http'
import {Platillo}from '../interfaces/Platillo'

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  URI='Http://localhost:3000/menu/'

  constructor(private http: HttpClient) { }


  getPlatillos(){
    return this.http.get<Platillo[]>(this.URI);
  }
  notif(notification) {
    return this.http.post("http://localhost:3000/notification",notification)
  }

}
