import { Component, OnInit } from '@angular/core';

//Usar servicio, métodos HTTP creados para el usuario del lado del Front
import {UsuariosService} from '../../servicios/usuarios.service';
//Importando el modelo de datos para usuarios
import { Usuario } from 'src/app/modeloDatos/usuarios';
//Utilizar rutas en la acción del método
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio-sesion-form',
  templateUrl: './inicio-sesion-form.component.html',
  styleUrls: ['./inicio-sesion-form.component.css']
})
export class InicioSesionFormComponent implements OnInit {

  //Variable de tipo estructura usuario, inicia con nada por defecto
  usuario: Usuario = {carnet: 0, contra: ''};

  constructor(private usuarioServicios: UsuariosService, private router: Router) { }
  
  iniciarSesion(){
    
    this.usuarioServicios.iniciarSesion(this.usuario.carnet, this.usuario.contra).subscribe(
      (res:any) => { if(res.mensaje == 'No existe'){
            alert('Datos incorrectos');
        }else{
          alert('Bienvenido: ' + res[0].nombre + ' ' + res[0].apellido);
          sessionStorage.setItem('carnet', res[0].carnet);
          sessionStorage.setItem('usuario', res[0].nombre);
          this.router.navigate(['tablero']);
        }
        
      }, 
      (err) => {console.log(err)}
    );
  }

  volverInicio(){
    this.router.navigate(['/']);
  }
  recuperarContra(){
    this.router.navigate(['recuperarContra']);
  }

  ngOnInit(): void {
  }

}
