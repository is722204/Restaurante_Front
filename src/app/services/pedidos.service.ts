import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  URI='Http://localhost:3000/menu'

  constructor(private http: HttpClient) { }

  table=''
  password=''

  createNotification(notification) {
    console.log(notification)
    return this.http.post("http://localhost:3000/notification", { responseType: 'text' }, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }

  createPedido(platilloSelected){
    return this.http.post(this.URI+"/pedido",platilloSelected);
  }

  getPedidos(mesa){
    return this.http.get(this.URI+"/pedido/"+mesa)
  }

  getVerify(mesa,id){
    return this.http.get(this.URI+"/validate/"+id+"/"+mesa,{responseType: 'text'})
  }

  getActive(mesa,id){
    return this.http.get(this.URI+"/verify/"+id+"/"+mesa,{responseType: 'text'})
  }

 
}
