import { Component, OnInit } from '@angular/core';

//Utilizar rutas en la acción del método
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-tablero',
  templateUrl: './menu-tablero.component.html',
  styleUrls: ['./menu-tablero.component.css']
})
export class MenuTableroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  salir(){
    alert('Gracias por utilizar la app')
    this.router.navigate(['/']);
  }
}
