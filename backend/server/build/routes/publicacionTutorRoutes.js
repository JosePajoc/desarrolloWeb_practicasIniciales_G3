"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicacionTutorController_1 = require("../controllers/publicacionTutorController");
class publicacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.router
            .get('/', publicacionTutorController_1.verPublicaciones);
    }
}
const PublicacionesRoutes = new publicacionesRoutes();
exports.default = PublicacionesRoutes.router;
