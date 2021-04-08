"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const publicacionTutorRoutes_1 = __importDefault(require("./routes/publicacionTutorRoutes"));
const cursosRoutes_1 = __importDefault(require("./routes/cursosRoutes"));
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
        this.app.use(morgan_1.default('dev')); //Se usa para visualizar las rutas en la terminal visitadas por el cliente
        this.app.use(cors_1.default()); //Con esto angular puede solicitar datos al servidor
        this.app.use(express_1.default.json()); //Poder aceptar el formato JSON del frontend 
        this.app.use(express_1.default.urlencoded({ extended: false })); //Enviar desde un formulario HTML esto es opcional
    }
    //Método para las rutas
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/usuarios', usuariosRoutes_1.default);
        this.app.use('/verPublicaciones', publicacionTutorRoutes_1.default);
        this.app.use('/verCursos', cursosRoutes_1.default);
    }
    //Método para iniciar el servidor
    start() {
        this.app.listen(this.app.get('port'), () => { console.log('servidor en puerto ', this.app.get('port')); });
    }
}
//Iniciar el objeto servidor
const servidor = new server();
servidor.start();
