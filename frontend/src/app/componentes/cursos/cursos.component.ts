import { Component, OnInit } from '@angular/core';

import {CursosService} from '../../servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  //Agregar el nombre del usuario al html obtenido de la memoria del navegador
  nombreUsuario = sessionStorage.getItem('usuario');
  //Guarda el arreglo que da como respuesta el backend
  cursos;

  constructor(private cursoServicio: CursosService) { }

  ngOnInit(): void {
    this.cursoServicio.verCursos().subscribe(
      res => {console.log(res); this.cursos=res, 
      err => console.log(err)}
      );
  }

}
