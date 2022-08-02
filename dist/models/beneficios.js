"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Beneficio = connection_1.default.define('Beneficios', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    titulo: { type: sequelize_1.DataTypes.STRING },
    descripcion: { type: sequelize_1.DataTypes.STRING },
    activado: { type: sequelize_1.DataTypes.INTEGER },
    imagen: { type: sequelize_1.DataTypes.STRING },
    documento: { type: sequelize_1.DataTypes.STRING }
});
exports.default = Beneficio;
//# sourceMappingURL=beneficios.js.map