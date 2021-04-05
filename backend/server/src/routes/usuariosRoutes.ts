import {Router} from 'express';
import {verUsuarios, nuevoUsuario, verUsuario, eliminarUsuario, actualizarUsuario} from '../controllers/usuariosController';

class usuarioRoutes{
    public router: Router = Router();               //Variable para guardar objeto de tipo ruta

    constructor(){
        this.config();
    }

    config(): void{
        this.router
        .get('/',  verUsuarios)
        .get('/:carnet', verUsuario)
        .post('/', nuevoUsuario)
        .delete('/:carnet', eliminarUsuario)
        .put('/:carnet', actualizarUsuario);
    }

}

const UsuarioRoutes = new usuarioRoutes();
export default UsuarioRoutes.router;