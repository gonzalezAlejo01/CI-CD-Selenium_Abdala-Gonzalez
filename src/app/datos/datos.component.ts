import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  error: string
  lista: Array<Array<any>>;

  constructor(private router: Router){
    this.lista = []
    this.error = ""
  }
  
  public logOut(){
    this.router.navigate(["/login"])
  }
  public async ngOnInit(){
    const rta = await fetch("https://apis.datos.gob.ar/series/api/series/?ids=120.1_ED1_1993_0_26")
    const data = await rta.json()
    this.lista = JSON.parse(JSON.stringify(data)).data;
    console.log(this.lista)
    
  }

  public filtrar(minimo: string){
    let listaFiltro = this.lista;
    this.error = ""
    if(minimo.length < 1){
      this.error = "sos un boludo"
    }
    for (let i=0; i<listaFiltro.length; i++){
      if(listaFiltro[i][1]<minimo){
        listaFiltro.splice(i, 1)
        i--
      }
    }
    console.log(listaFiltro)
    console.log(this.lista)
  }
}
