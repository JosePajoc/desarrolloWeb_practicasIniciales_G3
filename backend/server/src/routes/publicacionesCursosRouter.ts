import {Router} from 'express';

import {verPublicacionesCursos} from '../controllers/publicacionCursoController';

class publicacionesCursosRoutes{
    public router: Router = Router();

    constructor(){
        this.configuracion();
    }

    configuracion(): void{
        this.router
            .get('/', verPublicacionesCursos);
    }
}
const PublicacionesCursosRoutes = new publicacionesCursosRoutes();
export default PublicacionesCursosRoutes.router;