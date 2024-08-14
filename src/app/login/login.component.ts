import { Router } from "@angular/router"
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  error: any
  constructor(private router: Router){
    this.error = ""
  }
  public login(){
    this.router.navigate(["/Datos"]) 
  }
}
