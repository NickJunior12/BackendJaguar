"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Banner = connection_1.default.define('Banners', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    archivo: { type: sequelize_1.DataTypes.STRING },
    ubicacion: { type: sequelize_1.DataTypes.STRING },
    orden: { type: sequelize_1.DataTypes.INTEGER },
    activo: { type: sequelize_1.DataTypes.INTEGER }
});
exports.default = Banner;
//# sourceMappingURL=banner-model.js.map