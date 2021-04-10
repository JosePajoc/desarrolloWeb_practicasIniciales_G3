import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  nada: Object;

  constructor(private http: HttpClient) { }

  verCursos(){ return this.http.get('http://localhost:3000/verCursos'); }

  verIdCurso(nombreCurso: String) { return this.http.get(`http://localhost:3000/verCursos/${nombreCurso}`); };

  //hacerPublicacionCurso(idCurso: number, carnet: number, mensaje: String) { 
    //return this.http.post(`http://localhost:3000/verCursos/${idCurso}/${carnet}/${mensaje}`, 'prueba'); 
  //};

}

