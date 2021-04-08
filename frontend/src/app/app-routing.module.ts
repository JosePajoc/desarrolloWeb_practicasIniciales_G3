import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NuevoUsuarioComponent} from './componentes/nuevo-usuario/nuevo-usuario.component';
import {InicioSesionFormComponent} from './componentes/inicio-sesion-form/inicio-sesion-form.component';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {RecuperarContraComponent} from './componentes/recuperar-contra/recuperar-contra.component';
import {TableroComponent} from './componentes/tablero/tablero.component';
import {CursosComponent} from './componentes/cursos/cursos.component';

const routes: Routes = [
  { path: '', component: InicioComponent  },
  { path: 'nuevoUsuario', component: NuevoUsuarioComponent  },
  { path: 'inicioSesion', component: InicioSesionFormComponent  },
  { path: 'recuperarContra', component: RecuperarContraComponent },
  { path: 'tablero', component: TableroComponent },
  { path: 'verCursos', component: CursosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
