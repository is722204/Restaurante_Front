import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';
import {PlatillosService} from '../../services/platillos.service'

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.less']
})
export class PlatillosComponent implements OnInit {
  state=true;
  categorias=[];
  platillos=[];
  platillosTotales=[];
  platilloSelected={
    price:null,
    description:null,
    name:null,
    amount:0,
    table:null,
    password:"123"
  }
  constructor(private router: Router,private platilloService: PlatillosService,private pedidoService: PedidosService) { }

  ngOnInit(): void {
    this.platilloService.getPlatillos()
    .subscribe(
      res=>{
        this.platillosTotales=res;
        this.categorias= this.platillosTotales.map(function (e){
          let category={
            nombre:e.categoria,
            class:""
          }
          return category;
        })
        var uniqueArray = this.removeDuplicates(this.categorias, "nombre");
        this.categorias=uniqueArray;
        this.filter(this.categorias[0].nombre)
      },
      err=>console.log(err)
    )
  }
  //Cada que se abre el modal, se reinician los valores
  loadData(plato){
    this.platilloSelected.name=plato.nombre
    this.platilloSelected.description=plato.descr
    this.platilloSelected.price=plato.precio  
    this.platilloSelected.amount=0 
    this.platilloSelected.table=this.pedidoService.table || localStorage.getItem("Mesa")
    this.platilloSelected.password=this.pedidoService.password || localStorage.getItem("Password")
    this.state=true;
  }
  getWaiter(){
    this.platilloService.notif({mesa:this.pedidoService.table,tipo:"Solicitud de mesero",password:this.pedidoService.password}).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    alert("En un momento llegará un mesero a su mesa")
  }
  //Suma y resta del modal
  suma(){
    this.platilloSelected.amount++
      this.state=false;
 
  }
  resta() {
    if (this.platilloSelected.amount <= 1) {
      if(this.platilloSelected.amount==0){
        alert("No puede pedir cantidades negativas")
      }
      else{
        this.state=true
        this.platilloSelected.amount--
      }
    }
    else {
      this.platilloSelected.amount--
    }
  }
  //Envía los pedidos a la base de datos
  sendPedido(){
    this.pedidoService.createPedido(this.platilloSelected)
    .subscribe(
      res=>{
        console.log(res)},
      err=>console.log(err)
    )
    

  }

  //Filtrar los platillos por categoría
  filter(category:String){
    this.platillos.splice(0)
    this.categorias.forEach(element => {
      element.class="";
      if(element.nombre==category){
        element.class="active"
      }
    });
    this.platillosTotales.forEach(element => {
      if(element.categoria==category){
        this.platillos.push(element)
      }
    });
  }
  



  removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}
  
}
