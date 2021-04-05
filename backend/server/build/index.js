"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Objeto para el servidor
class server {
    constructor() {
        this.app = express_1.default(); //Con ello se crea el servidor
        this.config();
        this.routes();
    }
    //Método para configurar el servidor
    config() {
        //Se modifica la propiedad del objeto aplicación editando su puerto o usando uno otorgado por un servicio
        this.app.set('port', process.env.Port || 3000);
    }
    //Método para las rutas
    routes() {
    }
    //Método para iniciar el servidor
    start() {
        this.app.listen(this.app.get('port'), () => { console.log('servidor en puerto ', this.app.get('port')); });
    }
}
//Iniciar el objeto servidor
const servidor = new server();
servidor.start();
