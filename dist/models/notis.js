"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Noticia = connection_1.default.define('Noticias', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    titulo: { type: sequelize_1.DataTypes.STRING },
    descripcion: { type: sequelize_1.DataTypes.STRING },
    vigencia: { type: sequelize_1.DataTypes.DATE },
    activado: { type: sequelize_1.DataTypes.INTEGER },
    imagen: { type: sequelize_1.DataTypes.STRING }
});
exports.default = Noticia;
//# sourceMappingURL=notis.js.map