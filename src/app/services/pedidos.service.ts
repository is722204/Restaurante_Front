import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  URI='/menu'

  constructor(private http: HttpClient) { }

  table=''
  password=''

  

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
