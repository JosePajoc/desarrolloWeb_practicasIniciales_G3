import {Router} from 'express';
import {IndexController} from '../controllers/indexController';

class indexRoutes{
    public router: Router = Router();               //Variable para guardar objeto de tipo ruta

    constructor(){
        this.config();
    }

    config(): void{                                     //Al visitar la ruta va a llamar el proceso del archivo indexController.ts
        this.router.get('/', IndexController.index);    //La clase posee el método index
    }

}

const IndexRoutes = new indexRoutes();
export default IndexRoutes.router;