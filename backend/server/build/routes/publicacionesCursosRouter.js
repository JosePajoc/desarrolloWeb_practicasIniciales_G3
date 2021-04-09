"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicacionCursoController_1 = require("../controllers/publicacionCursoController");
class publicacionesCursosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.router
            .get('/', publicacionCursoController_1.verPublicacionesCursos);
    }
}
const PublicacionesCursosRoutes = new publicacionesCursosRoutes();
exports.default = PublicacionesCursosRoutes.router;
