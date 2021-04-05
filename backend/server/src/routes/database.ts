import {createPool} from 'mysql2/promise';              //Para usar promesas con mysql


export async function connect(){
    
    const conexion = await createPool({                        //conectar a accesoBD
        host: 'localhost',
        user: 'root',
        password: '1234567890',
        database: 'centralbd'
    });     
    
    return conexion;
}


