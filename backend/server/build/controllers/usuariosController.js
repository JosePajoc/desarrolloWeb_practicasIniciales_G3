"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarUsuario = exports.eliminarUsuario = exports.verUsuario = exports.nuevoUsuario = exports.verUsuarios = void 0;
const database_1 = require("../routes/database"); //Usando la conexión creada en database.ts
function verUsuarios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect(); //Utilizar la configuración de acceso a mysql
        const usuarios = yield conn.query('SELECT * FROM usuario');
        return res.json(usuarios[0]); //Retorna un bufered, solo se usa la posición 0 del arreglo
    });
}
exports.verUsuarios = verUsuarios;
function nuevoUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const nuevoUsuario = req.body; //Tomar el cuerpo de lo que recibe
        console.log(nuevoUsuario); //Mostrar lo recibido en consola
        const conn = yield database_1.connect();
        yield conn.query('INSERT INTO usuario SET ?', nuevoUsuario);
        return res.json({ mensaje: 'Se ha creado un nuevo usuario' });
    });
}
exports.nuevoUsuario = nuevoUsuario;
function verUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const carnet = req.params.carnet; //Extraer el paramétro carnet de la ruta
        const conn = yield database_1.connect();
        const usuario = yield conn.query('SELECT * FROM usuario WHERE carnet = ?', [carnet]);
        return res.json(usuario[0]);
    });
}
exports.verUsuario = verUsuario;
function eliminarUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const carnet = req.params.carnet; //Extraer el paramétro carnet de la ruta
        const conn = yield database_1.connect();
        const usuario = yield conn.query('DELETE FROM usuario WHERE carnet = ?', [carnet]);
        return res.json({ mensaje: 'Usuario eliminado' });
    });
}
exports.eliminarUsuario = eliminarUsuario;
function actualizarUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const carnet = req.params.carnet; //Extraer el paramétro carnet de la ruta
        const datosNuevos = req.body;
        const conn = yield database_1.connect();
        const usuario = yield conn.query('UPDATE usuario set ? WHERE carnet = ?', [datosNuevos, carnet]);
        return res.json({ mensaje: 'Usuario actualizado' });
    });
}
exports.actualizarUsuario = actualizarUsuario;
