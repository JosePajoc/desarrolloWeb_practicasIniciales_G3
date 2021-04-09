import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesCursosService {

  constructor(private http: HttpClient) { }

  verPublicacionesCursos(){ return this.http.get('http://localhost:3000/verCursosPublicaciones');  }
}


