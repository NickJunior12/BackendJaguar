"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var connection_1 = require("../db/connection");
var Banner = connection_1["default"].define('Banners', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    archivo: { type: sequelize_1.DataTypes.STRING },
    ubicacion: { type: sequelize_1.DataTypes.STRING },
    orden: { type: sequelize_1.DataTypes.INTEGER },
    activo: { type: sequelize_1.DataTypes.INTEGER }
});
exports["default"] = Banner;
