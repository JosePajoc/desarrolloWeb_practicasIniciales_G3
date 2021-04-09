import {Request, Response} from 'express';
import {connect} from '../routes/database';

//Ver consulta SQL
export async function verPublicacionesCursos(req: Request, res: Response) {
    const conexion = await connect();
    const publicaciones = await conexion.query('select usuario.nombre as usuario, curso.nombre as curso, publicacioncurso.mensaje, publicacioncurso.fecha from usuario, curso, publicacioncurso where (usuario.carnet = publicacioncurso.carnetusuario) and (curso.idcurso = publicacioncurso.idcurso) order by publicacioncurso.fecha desc;');
    return res.json(publicaciones[0]);
}