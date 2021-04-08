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
exports.verPublicaciones = void 0;
const database_1 = require("../routes/database");
//Ver consulta SQL
function verPublicaciones(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conexion = yield database_1.connect();
        const publicaciones = yield conexion.query('select usuario.nombre as usuario, tutor.nombre as tutor, publicaciontutor.mensaje, publicaciontutor.fecha from usuario, tutor, publicaciontutor where (usuario.carnet = publicaciontutor.carnetusuario) and (tutor.idtutor = publicaciontutor.idtutor) order by publicaciontutor.fecha desc');
        return res.json(publicaciones[0]);
    });
}
exports.verPublicaciones = verPublicaciones;
