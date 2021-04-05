import express, {Application} from 'express';

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
    }
    //Método para las rutas
    routes(): void{

    }
    //Método para iniciar el servidor
    start(): void{
        this.app.listen(this.app.get('port'), ()=>{ console.log('servidor en puerto ', this.app.get('port')) });                      
    }
}

//Iniciar el objeto servidor
const servidor = new server();
servidor.start();