import { Component, OnInit } from '@angular/core';

import {PublicacionesTutorService} from '../../servicios/publicaciones-tutor.service';
import {PublicacionesCursosService} from '../../servicios/publicaciones-cursos.service'

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  //Agregar el nombre del usuario al html obtenido de la memoria del navegador
  nombreUsuario = sessionStorage.getItem('usuario');
  //Guarda el arreglo que da como respuesta el backend
  publicacionesTutor: any;
  publicacionesCursos: any;

  constructor(private publiTutorServicios: PublicacionesTutorService, 
    private publiCursosServicios: PublicacionesCursosService) { }

  ngOnInit(): void {
    
    this.publiTutorServicios.verPublicacionesTutor().subscribe(
      res => {console.log(res); this.publicacionesTutor=res, 
      err => console.log(err)}
      );
    
      this.publiCursosServicios.verPublicacionesCursos().subscribe(
        res => {console.log(res); this.publicacionesCursos=res, 
        err => console.log(err)}
        );
  }

}
