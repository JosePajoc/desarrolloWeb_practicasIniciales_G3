import {Request, Response} from 'express';
import {connect} from '../routes/database';

//Ver consulta SQL
export async function verCursos(req: Request, res: Response) {
    const conexion = await connect();
    const publicaciones = await conexion.query('SELECT * FROM curso');
    return res.json(publicaciones[0]);
}

export async function idCurso(req: Request, res: Response) {
    const conexion = await connect();
    const nombreCurso = req.params.nombreCurso;
    const codigoCurso = await conexion.query('select idcurso from curso where(nombre = ?)', [nombreCurso]);
    return res.json(codigoCurso[0]);
}

export async function publicarComentarioCurso(req: Request, res: Response) {
    const conexion = await connect();
    const idCurso = req.body.idCurso;
    const carnet = req.body.carnet;
    const mensaje = req.body.comentario;
    const publicarComentario = await conexion.query('insert into publicacioncurso (carnetusuario, idcurso, mensaje) values (?, ?, ?)', [carnet, idCurso, mensaje]);
    return res.json({mensaje: 'Publicación realizada'});
}