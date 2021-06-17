import { Component, OnInit, Input} from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { PlatillosService } from 'src/app/services/platillos.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less' ]
})
export class CartComponent implements OnInit {
  total=0
  @Input() mesa:String;
  pedidos=<any>[];
  constructor(private pedidoService: PedidosService, private platilloService: PlatillosService) { }
//Cambiar por la mesa dinámica
  ngOnInit(): void {
    this.pedidoService.getPedidos(this.pedidoService.table || localStorage.getItem("Mesa"))
     .subscribe(
      res=>{
        this.pedidos=res
        this.total=0
    //console.log(this.pedidos)
    this.pedidos.forEach(element => {
      let precio=element.precio
      let cantidad=element.cantidad

      this.total+=(parseInt(precio)*parseInt(cantidad))
    });
      
      
      
      },
      err=>console.log(err)
    )
    
  }
  pay(){
    let noti={mesa:this.pedidoService.table || localStorage.getItem("Mesa"),tipo:"Solicitud de cuenta",password:this.pedidoService.password || localStorage.getItem("Password")}
    this.platilloService.notif(noti).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    alert("En un momento llegará un mesero a cobrar")
  }
  getWaiter(){
    let noti={mesa:this.pedidoService.table || localStorage.getItem("Mesa"),tipo:"Solicitud de mesero",password:this.pedidoService.password || localStorage.getItem("Password")}
    this.platilloService.notif(noti).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    alert("En un momento llega tu mesero")

  }

  
}
