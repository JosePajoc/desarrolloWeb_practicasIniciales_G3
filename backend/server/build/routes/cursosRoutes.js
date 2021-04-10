"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosController_1 = require("../controllers/cursosController");
const cursosController_2 = require("../controllers/cursosController");
class cursosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.router
            .get('/', cursosController_1.verCursos)
            .get('/:nombreCurso', cursosController_2.idCurso)
            .post('/:idCurso/:carnet/:mensaje', cursosController_2.publicarComentarioCurso);
    }
}
const CursosRoutesRoutes = new cursosRoutes();
exports.default = CursosRoutesRoutes.router;
