import { Injectable } from '@angular/core';
//Para pedir datos con angular
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../modeloDatos/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  //Crear variable de tipo HTTP en el constructor
  constructor(private http: HttpClient) { 

  }
  nuevoUsuario(usuario: Usuario){
    return this.http.post('http://localhost:3000/usuarios', usuario);
  }

  eliminarUsuario(carnet: number){
    return this.http.delete(`http://localhost:3000/usuarios/${carnet}`);
  }
  iniciarSesion(carnet: number, contra: String){
    return this.http.get(`http://localhost:3000/usuarios/${carnet}/${contra}`);
  }

}
