import {Router} from 'express';

import {verPublicaciones} from '../controllers/publicacionTutorController';

class publicacionesRoutes{
    public router: Router = Router();

    constructor(){
        this.configuracion();
    }

    configuracion(): void{
        this.router
            .get('/', verPublicaciones);
    }
}
const PublicacionesRoutes = new publicacionesRoutes();
export default PublicacionesRoutes.router;