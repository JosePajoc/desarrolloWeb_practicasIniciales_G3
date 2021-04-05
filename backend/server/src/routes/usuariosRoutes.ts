import {Router} from 'express';
import {verUsuarios} from '../controllers/usuariosController';

class usuarioRoutes{
    public router: Router = Router();               //Variable para guardar objeto de tipo ruta

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',  verUsuarios);
    }

}

const UsuarioRoutes = new usuarioRoutes();
export default UsuarioRoutes.router;