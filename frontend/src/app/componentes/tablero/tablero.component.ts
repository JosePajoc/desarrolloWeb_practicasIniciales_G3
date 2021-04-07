import { Component, OnInit } from '@angular/core';
//Usar servicio, métodos HTTP creados para el usuario del lado del Front
import {UsuariosService} from '../../servicios/usuarios.service';
//Importando el modelo de datos para usuarios
import { Usuario } from 'src/app/modeloDatos/usuarios';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  //Agregar el nombre del usuario al html obtenido de la memoria del navegador
  nombreUsuario = sessionStorage.getItem('usuario');

  usuarios: Usuario[] = [
    {carnet: 1, nombre: 'nombre1', apellido: 'apellido1'}, 
    {carnet: 2, nombre: 'nombre2', apellido: 'apellido2'},
    {carnet: 3, nombre: 'nombre3', apellido: 'apellido3'}
  ];

  constructor(private usuarioServicios: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioServicios.verUsuarios().subscribe(
      res => {console.log(res), 
      err => console.log(err)}
      );
  }

}
