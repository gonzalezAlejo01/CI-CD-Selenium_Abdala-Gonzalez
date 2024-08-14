import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error: any
  constructor(private router: Router){
    this.error = ""
  }

  public register(){
    console.log("entra?")
    this.router.navigate(["/Datos"])
  }

  

}
