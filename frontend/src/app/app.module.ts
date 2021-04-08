import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Para usar peticiones HTTP
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { InicioSesionFormComponent } from './componentes/inicio-sesion-form/inicio-sesion-form.component';
import { NuevoUsuarioComponent } from './componentes/nuevo-usuario/nuevo-usuario.component';
//Métodos para los usuarios usando las rutas del backend
import {UsuariosService} from './servicios/usuarios.service';
//Para enlazar los datos del formulario con el modelo de usuarios
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RecuperarContraComponent } from './componentes/recuperar-contra/recuperar-contra.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { MenuTableroComponent } from './componentes/menu-tablero/menu-tablero.component';
import { CursosComponent } from './componentes/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InicioSesionFormComponent,
    NuevoUsuarioComponent,
    InicioComponent,
    RecuperarContraComponent,
    TableroComponent,
    MenuTableroComponent,
    CursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
