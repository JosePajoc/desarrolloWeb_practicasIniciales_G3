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
exports.publicarComentarioCurso = exports.idCurso = exports.verCursos = void 0;
const database_1 = require("../routes/database");
//Ver consulta SQL
function verCursos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conexion = yield database_1.connect();
        const publicaciones = yield conexion.query('SELECT * FROM curso');
        return res.json(publicaciones[0]);
    });
}
exports.verCursos = verCursos;
function idCurso(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conexion = yield database_1.connect();
        const nombreCurso = req.params.nombreCurso;
        const codigoCurso = yield conexion.query('select idcurso from curso where(nombre = ?)', [nombreCurso]);
        return res.json(codigoCurso[0]);
    });
}
exports.idCurso = idCurso;
function publicarComentarioCurso(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conexion = yield database_1.connect();
        const idCurso = req.body.idCurso;
        const carnet = req.body.carnet;
        const mensaje = req.body.comentario;
        const publicarComentario = yield conexion.query('insert into publicacioncurso (carnetusuario, idcurso, mensaje) values (?, ?, ?)', [carnet, idCurso, mensaje]);
        return res.json({ mensaje: 'Publicación realizada' });
    });
}
exports.publicarComentarioCurso = publicarComentarioCurso;
