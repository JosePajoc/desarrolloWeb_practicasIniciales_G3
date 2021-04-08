"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosController_1 = require("../controllers/cursosController");
class cursosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.router
            .get('/', cursosController_1.verCursos);
    }
}
const CursosRoutesRoutes = new cursosRoutes();
exports.default = CursosRoutesRoutes.router;
