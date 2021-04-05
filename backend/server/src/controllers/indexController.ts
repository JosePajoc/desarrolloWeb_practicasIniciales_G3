import {Request, Response} from 'express';                  //Recibir y responder

class indexController{
    public index (req: Request, res: Response){             //Método usado en la ruta
        res.json({mensaje: 'Estas en la página principal'})
    }   
}

export const IndexController = new indexController();       //Exportar para usar en { }