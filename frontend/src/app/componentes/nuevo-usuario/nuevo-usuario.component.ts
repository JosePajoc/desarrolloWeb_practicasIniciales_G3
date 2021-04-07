import { Component, OnInit } from '@angular/core';

//Usar servicio, métodos HTTP creados para el usuario del lado del Front
import {UsuariosService} from '../../servicios/usuarios.service';
//Importando el modelo de datos para usuarios
import { Usuario } from 'src/app/modeloDatos/usuarios';
//Utilizar rutas en la acción del método
import {Router} from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  //Variable de tipo estructura usuario, inicia con nada por defecto
  usuario: Usuario = {carnet: 0, nombre: '', apellido: '', contra: '', correo: ''};
  
  //Constructor llamando a los servicios para métodos http
  constructor(private usuarioServicios: UsuariosService, private router: Router) {   }    

  nuevoUsuario(){
    this.usuarioServicios.nuevoUsuario(this.usuario).subscribe(
      res => {alert(JSON.stringify(res)); this.router.navigate(['/']), 
      err => console.log(err)}
      );
  }
  
  volverInicio(){
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
