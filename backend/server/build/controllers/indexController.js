"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
class indexController {
    index(req, res) {
        res.json({ mensaje: 'Estas en la página principal' });
    }
}
exports.IndexController = new indexController(); //Exportar para usar en { }
