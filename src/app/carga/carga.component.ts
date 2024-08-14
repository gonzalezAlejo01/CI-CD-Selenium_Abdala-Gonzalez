import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent {
  status: string;
  constructor(private router: Router){
    this.status=""
  }
  
  public logOut(){
    this.router.navigate(["/login"])
  }

  public mandar(pal: string, num: string){
    this.status=""
    if(pal.length!=0 && num.length!=0){
      this.status="Se mandó piola"
    }
    else{
      this.status="Poné algo forro"
    }
  }
}
