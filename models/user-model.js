"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var connection_1 = require("../db/connection");
var Usuario = connection_1["default"].define('Usuario', {
    usuario: { type: sequelize_1.DataTypes.STRING },
    pass: { type: sequelize_1.DataTypes.STRING },
    activado: { type: sequelize_1.DataTypes.INTEGER }
});
exports["default"] = Usuario;
