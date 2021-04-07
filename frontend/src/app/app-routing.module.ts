import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NuevoUsuarioComponent} from './componentes/nuevo-usuario/nuevo-usuario.component';
import {InicioSesionFormComponent} from './componentes/inicio-sesion-form/inicio-sesion-form.component';

const routes: Routes = [
  {
    path: 'nuevoUsuario',
    component: NuevoUsuarioComponent
  },
  {
    path: 'inicioSesion',
    component: InicioSesionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
