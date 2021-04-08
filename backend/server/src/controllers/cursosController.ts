import {Request, Response} from 'express';
import {connect} from '../routes/database';

//Ver consulta SQL
export async function verCursos(req: Request, res: Response) {
    const conexion = await connect();
    const publicaciones = await conexion.query('SELECT * FROM curso');
    return res.json(publicaciones[0]);
}