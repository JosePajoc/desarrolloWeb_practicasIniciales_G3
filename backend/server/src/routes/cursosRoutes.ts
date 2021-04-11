import {Router} from 'express';

import {verCursos} from '../controllers/cursosController';
import {idCurso, publicarComentarioCurso} from '../controllers/cursosController'

class cursosRoutes{
    public router: Router = Router();

    constructor(){
        this.configuracion();
    }

    configuracion(): void{
        this.router
            .get('/', verCursos)
            .get('/:nombreCurso', idCurso)
            .post('/nuevaPublicacion', publicarComentarioCurso);
    }
}
const CursosRoutesRoutes = new cursosRoutes();
export default CursosRoutesRoutes.router;