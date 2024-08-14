import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './datos/datos.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { CargaComponent } from './carga/carga.component';
const routes: Routes = [{
  path: "Datos",
  component: DatosComponent,
  title: "Datos"
},
{
  path: 'main',
  component: MenuComponent,
  ...canActivate(() => redirectUnauthorizedTo(['']))
},{
  path: "",
  component: MenuComponent,
  title: "Menu"
},{
  path: "login",
  component: LoginComponent,
  title: "Login"
},{
  path: "registro",
  component: RegisterComponent,
  title: "Registro"
},{
  path: "carga",
  component: CargaComponent,
  title: "carga de datos"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
