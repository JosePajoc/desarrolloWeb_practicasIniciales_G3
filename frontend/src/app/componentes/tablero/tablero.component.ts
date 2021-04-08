import { Component, OnInit } from '@angular/core';

import {PublicacionesTutorService} from '../../servicios/publicaciones-tutor.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  //Agregar el nombre del usuario al html obtenido de la memoria del navegador
  nombreUsuario = sessionStorage.getItem('usuario');
  //Guarda el arreglo que da como respuesta el backend
  publicacionesTutor;

  constructor(private publiTutorServicios: PublicacionesTutorService) { }

  ngOnInit(): void {
    this.publiTutorServicios.verPublicacionesTutor().subscribe(
      res => {console.log(res); this.publicacionesTutor=res, 
      err => console.log(err)}
      );
  }

}
