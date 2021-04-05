"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class indexRoutes {
    constructor() {
        this.router = express_1.Router(); //Variable para guardar objeto de tipo ruta
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.IndexController.index); //La clase posee el método index
    }
}
const IndexRoutes = new indexRoutes();
exports.default = IndexRoutes.router;
