import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private pedidoService: PedidosService, private router:Router) { }

  ngOnInit(): void {
  }

  validate(mesa,id) {
    this.pedidoService.getVerify("mesa_"+mesa.value,id.value).subscribe(
      res=>{
        this.pedidoService.table="mesa_"+mesa.value
        this.pedidoService.password=id.value
        localStorage.setItem("Password",id.value)
        localStorage.setItem("Mesa","mesa_"+mesa.value)
        if(res=="pasa"){
          this.router.navigate(["/platillos"])
        }
        else{
          alert("Usa los datos de tu mesa")
        }
        
      },
      err=>console.log(err)
    )

    return false
  }
 

}
