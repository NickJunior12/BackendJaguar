"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var connection_1 = require("../db/connection");
var Noticia = connection_1["default"].define('Noticias', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    titulo: { type: sequelize_1.DataTypes.STRING },
    descripcion: { type: sequelize_1.DataTypes.STRING },
    vigencia: { type: sequelize_1.DataTypes.DATE },
    activado: { type: sequelize_1.DataTypes.INTEGER },
    imagen: { type: sequelize_1.DataTypes.STRING }
});
exports["default"] = Noticia;
