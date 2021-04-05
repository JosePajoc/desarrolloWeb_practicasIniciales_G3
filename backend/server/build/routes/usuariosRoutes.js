"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
class usuarioRoutes {
    constructor() {
        this.router = express_1.Router(); //Variable para guardar objeto de tipo ruta
        this.config();
    }
    config() {
        this.router.get('/', usuariosController_1.verUsuarios);
    }
}
const UsuarioRoutes = new usuarioRoutes();
exports.default = UsuarioRoutes.router;
