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
        this.router
            .get('/', usuariosController_1.verUsuarios)
            .get('/:carnet', usuariosController_1.verUsuario)
            .post('/', usuariosController_1.nuevoUsuario)
            .delete('/:carnet', usuariosController_1.eliminarUsuario)
            .put('/:carnet', usuariosController_1.actualizarUsuario);
    }
}
const UsuarioRoutes = new usuarioRoutes();
exports.default = UsuarioRoutes.router;
