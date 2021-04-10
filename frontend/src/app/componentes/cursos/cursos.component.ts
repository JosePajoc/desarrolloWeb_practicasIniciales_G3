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
  //Datos para realizar publicción en la bd
  cursos: any;
  cursoSeleccionado: String;
  carnetUsuario: number;
  comentario: String;
  idCurso: number;

  constructor(private cursoServicio: CursosService) { }

  ngOnInit(): void {
    this.cursoServicio.verCursos().subscribe(
      res => {console.log(res); this.cursos=res, 
      err => console.log(err)}
      );
  }

  publicarComentarioCurso(){
    console.log('curso', this.cursoSeleccionado);
    this.carnetUsuario = Number.parseInt(sessionStorage.getItem('carnet'));
    console.log('carnet', this.carnetUsuario);
    console.log('Comentario', this.comentario);
    //Buscar el id del curso a traves del método get con el backend
    this.cursoServicio.verIdCurso(this.cursoSeleccionado).subscribe(
      (res: any) => { console.log('id curso', res[0].idcurso); this.idCurso = res[0].idcurso},
      (err) => {console.log(err)}
    );

    //Hacer publicación sobre un curso
    //this.cursoServicio.hacerPublicacionCurso(this.idCurso, this.carnetUsuario, this.comentario).subscribe(
      //(res: any) => { alert(res.mensaje) },
      //(err) => {console.log(err)}
    //);
  }

}
