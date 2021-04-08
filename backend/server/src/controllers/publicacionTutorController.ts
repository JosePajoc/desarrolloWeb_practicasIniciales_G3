import {Request, Response} from 'express';
import {connect} from '../routes/database';

//Ver consulta SQL
export async function verPublicaciones(req: Request, res: Response) {
    const conexion = await connect();
    const publicaciones = await conexion.query('select usuario.nombre as usuario, tutor.nombre as tutor, publicaciontutor.mensaje, publicaciontutor.fecha from usuario, tutor, publicaciontutor where (usuario.carnet = publicaciontutor.carnetusuario) and (tutor.idtutor = publicaciontutor.idtutor) order by publicaciontutor.fecha desc');
    return res.json(publicaciones[0]);
}