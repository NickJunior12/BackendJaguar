"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const DocumentosBeneficios = connection_1.default.define('DocumentosBeneficios', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    id_beneficio: { type: sequelize_1.DataTypes.INTEGER },
    documento: { type: sequelize_1.DataTypes.STRING },
    activado: { type: sequelize_1.DataTypes.INTEGER }
});
exports.default = DocumentosBeneficios;
//# sourceMappingURL=documento-beneficio-model.js.map