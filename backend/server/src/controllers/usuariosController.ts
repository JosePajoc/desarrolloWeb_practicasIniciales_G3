import {Request, Response} from 'express';                  //Recibir y responder
import {connect} from '../routes/database';                        //Usando la conexión creada en database.ts


export async function verUsuarios(req: Request, res: Response) {
    const conn = await connect();                                    //Utilizar la configuración de acceso a mysql
    const usuarios =await conn.query('SELECT * FROM usuario');
    return res.json(usuarios[0]);                                    //Retorna un bufered, solo se usa la posición 0 del arreglo
}

export async function nuevoUsuario(req: Request, res: Response) {
    const nuevoUsuario = req.body;                                   //Tomar el cuerpo de lo que recibe
    console.log(nuevoUsuario);                                       //Mostrar lo recibido en consola
    const conn = await connect();
    await conn.query('INSERT INTO usuario SET ?', nuevoUsuario );
    return res.json({mensaje: 'Se ha creado un nuevo usuario'});
}

export async function verUsuario(req: Request, res: Response) {
    const carnet = req.params.carnet;                               //Extraer el paramétro carnet de la ruta
    
    const conn = await connect();
    const usuario = await conn.query('SELECT * FROM usuario WHERE carnet = ?', [carnet]);
    return res.json(usuario[0]);  
}

export async function eliminarUsuario(req: Request, res: Response) {
    const carnet = req.params.carnet;                               //Extraer el paramétro carnet de la ruta
    
    const conn = await connect();
    const usuario = await conn.query('DELETE FROM usuario WHERE carnet = ?', [carnet]);
    return res.json({mensaje: 'Usuario eliminado'});  
}

export async function actualizarUsuario(req: Request, res: Response) {
    const carnet = req.params.carnet;                               //Extraer el paramétro carnet de la ruta
    const datosNuevos = req.body;
    const conn = await connect();
    const usuario = await conn.query('UPDATE usuario set ? WHERE carnet = ?', [datosNuevos, carnet]);
    return res.json({mensaje: 'Usuario actualizado'});  
}