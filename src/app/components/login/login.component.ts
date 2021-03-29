import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  validate(mesa,id) {
    console.log("mesa: "+ mesa.value)
    console.log("id: "+ id.value)
    
    return false
  }
 

}
