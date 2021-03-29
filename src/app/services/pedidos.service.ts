import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  URI='Http://localhost:3000/menu/pedido'

  constructor(private http: HttpClient) { }


  createPedido(platilloSelected){
    return this.http.post(this.URI,platilloSelected);
  }

  getPedidos(mesa){
    return this.http.get(this.URI+"/"+mesa)
  }
}
