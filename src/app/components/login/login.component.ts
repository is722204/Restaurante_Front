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
    console.log("mesa: "+ mesa.value)
    console.log("id: "+ id.value)
    
    this.pedidoService.getVerify(mesa.value,id.value).subscribe(
      res=>{
        this.pedidoService.table=mesa.value
        //localStorage.setItem("Mesa",mesa.value)
        this.pedidoService.password=id.value
        //localStorage.setItem("Password",id.value)
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
