import { Component, OnInit } from '@angular/core';

//Usar servicio, métodos HTTP creados para el usuario del lado del Front
import {UsuariosService} from '../../servicios/usuarios.service';
//Importando el modelo de datos para usuarios
import { Usuario } from 'src/app/modeloDatos/usuarios';
//Utilizar rutas en la acción del método
import {Router} from '@angular/router';


@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.component.html',
  styleUrls: ['./recuperar-contra.component.css']
})
export class RecuperarContraComponent implements OnInit {

  //Variable de tipo estructura usuario, inicia con nada por defecto
  usuario: Usuario = {carnet: 0, correo: '', contra:''};

  constructor(private usuarioServicios: UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }
  volverInicio(){
    this.router.navigate(['/']);
  }
  recuperarContra(){
    this.usuarioServicios.recuperarContra(this.usuario).subscribe(
      (res:any) => { if(res.mensaje == 'fallo'){
        alert('Usuario no registrado...');
    }else{
      alert('Contraseña actualizada, ya puedes iniciar sesión');
      this.router.navigate(['inicioSesion']);
      }
    }, 
      (err) => {console.log(err)}
    );
  }

}
