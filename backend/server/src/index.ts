<<<<<<< Updated upstream
import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import usuarioRoutes from './routes/usuariosRoutes';

//Objeto para el servidor
class server{
    public app: Application;                        //Variable publica de tipo aplicación

    constructor(){
        this.app = express();                       //Con ello se crea el servidor
        this.config();
        this.routes();
    }

    //Método para configurar el servidor
    config(): void{
        //Se modifica la propiedad del objeto aplicación editando su puerto o usando uno otorgado por un servicio
        this.app.set('port', process.env.Port || 3000); 
        this.app.use(morgan('dev'));                //Se usa para visualizar las rutas en la terminal visitadas por el cliente
        this.app.use(cors());                       //Con esto angular puede solicitar datos al servidor
        this.app.use(express.json());              //Poder aceptar el formato JSON del frontend 
        this.app.use(express.urlencoded({extended: false}));    //Enviar desde un formulario HTML esto es opcional
    }

    //Método para las rutas
    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/usuarios',usuarioRoutes);
    }
    
    //Método para iniciar el servidor
    start(): void{
        this.app.listen(this.app.get('port'), ()=>{ console.log('servidor en puerto ', this.app.get('port')) });                      
    }
}

//Iniciar el objeto servidor
const servidor = new server();
servidor.start();
=======
console.log('En proceso...') 
>>>>>>> Stashed changes
