"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const baseProd = 'u117119134_jaguardb';
const usuarioProd = 'u117119134_jaguaradmin';
const baseQA = 'u117119134_jaguardbqa';
const usuarioQA = 'u117119134_jaguarqa';
const db = new sequelize_1.Sequelize(baseProd, usuarioProd, 'Mexico2021', {
    host: 'sql441.main-hosting.eu',
    port: 3306,
    dialect: 'mysql'
});
exports.default = db;
//# sourceMappingURL=connection.js.map