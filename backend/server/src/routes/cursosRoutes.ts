import {Router} from 'express';

import {verCursos} from '../controllers/cursosController';

class cursosRoutes{
    public router: Router = Router();

    constructor(){
        this.configuracion();
    }

    configuracion(): void{
        this.router
            .get('/', verCursos);
    }
}
const CursosRoutesRoutes = new cursosRoutes();
export default CursosRoutesRoutes.router;