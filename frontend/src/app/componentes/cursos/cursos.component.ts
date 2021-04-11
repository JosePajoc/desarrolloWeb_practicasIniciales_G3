import { Component, OnInit } from '@angular/core';

import {CursosService} from '../../servicios/cursos.service';
import {publicacionCurso} from '../../modeloDatos/publicarComCurso';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  //Agregar el nombre del usuario al html obtenido de la memoria del navegador
  nombreUsuario = sessionStorage.getItem('usuario');
  //Datos para realizar publicción en la bd
  cursos: any;  //mostrar los cursos enviados por el backend
  cursoSeleccionado: String; //nombre del curso seleccionado en el select

  PublicacionCurso: publicacionCurso = {idCurso: 0, carnet: 0, comentario: ''};

  constructor(private cursoServicio: CursosService, private router: Router) { }

  ngOnInit(): void {
    this.cursoServicio.verCursos().subscribe(
      res => {console.log(res); this.cursos=res, 
      err => console.log(err)}
      );
  }

  obtenerIdCurso(){
    console.log('curso', this.cursoSeleccionado);
    this.PublicacionCurso.carnet = Number.parseInt(sessionStorage.getItem('carnet'));
    
    //Buscar el id del curso a traves del método get con el backend
    this.cursoServicio.verIdCurso(this.cursoSeleccionado).subscribe(
      (res: any) => {  this.PublicacionCurso.idCurso = res[0].idcurso, console.log(res[0].idcurso) },
      (err) => {console.log(err)}
    );
    
  }

  publicarComentarioCurso(){
    console.log('carnet', this.PublicacionCurso.carnet);
    console.log('Comentario', this.PublicacionCurso.comentario);
    console.log('idcurso', this.PublicacionCurso.idCurso);
    //Hacer publicación sobre un curso
    this.cursoServicio.hacerPublicacionCurso(this.PublicacionCurso).subscribe(
      res => { alert(JSON.stringify(res)), this.router.navigate(['/tablero']) },
      err => {console.log(err)}
    );
  }

  

}
