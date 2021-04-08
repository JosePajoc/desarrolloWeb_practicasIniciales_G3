import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesTutorService {

  constructor(private http: HttpClient) { }

  verPublicacionesTutor(){ return this.http.get('http://localhost:3000/verPublicaciones');  }
}
