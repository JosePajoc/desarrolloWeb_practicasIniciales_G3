import {Request, Response} from 'express';                  //Recibir y responder
import {connect} from '../routes/database';                        //Usando la conexión creada en database.ts
import usuariosRoutes from '../routes/usuariosRoutes';


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
    const carnet = req.params.carnet;                               //Extraer el paramétro carnet de la ruta o body
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

export async function buscarUsuario(req: Request, res: Response)  {  //iniciar sesión con carnet y contraseña
    const carnet = req.params.carnet;                               //Extraer el paramétro carnet de la ruta o body
    const contra = req.params.contra;
    const conn = await connect();
    //el primero captura la respuesta y el segundo el bufered de la consulta
    const [usuario, otro]: any = await conn.query('SELECT * FROM usuario WHERE carnet=? AND contra=?', [carnet, contra]);
    if (usuario.length > 0 ){
        //retorna un arreglo que posee el json
        return res.json(usuario);
    }
    return res.json({mensaje: 'No existe'})
}

export async function recuperarContra(req: Request, res: Response) {
    const carnet = req.params.carnet;                                //Extraer el paramétro carnet de la ruta
    const correo = req.params.correo;
    const nuevaContra = req.params.nuevaContra;                               
    const conn = await connect();
    //Verificar que el usuario exista
    const [usuario, otro]: any = await conn.query('SELECT * FROM usuario WHERE carnet=? AND correo=?', [carnet, correo]);
    if (usuario.length > 0 ){
        //Si existe se realizara la actualización y devuelve un estado
        const usutmp= await conn.query('UPDATE usuario SET CONTRA = ? WHERE carnet = ? AND correo = ?', 
        [nuevaContra, carnet, correo]);
        return res.json({mensaje: 'exito'});
    }
    return res.json({mensaje: 'fallo'});
}