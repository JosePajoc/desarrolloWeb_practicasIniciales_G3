import {Request, Response} from 'express';                  //Recibir y responder
import {connect} from '../routes/database';                        //Usando la conexión creada en database.ts


export async function verUsuarios(req: Request, res: Response) {
    const conn = await connect();
    const usuarios =await conn.query('SELECT * FROM usuario');
    res.json(usuarios[0]);                                          //Retorna un bufered, solo se usa la posición 0 del arreglo
}