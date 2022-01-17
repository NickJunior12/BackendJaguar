"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
// const db = new Sequelize('jaguardb','root','123456', {
//     host: 'localhost',
//     port: 3306,
//     dialect: 'mysql'
// })
var db = new sequelize_1.Sequelize('u117119134_jaguardb', 'u117119134_jaguaradmin', 'Mexico2021', {
    host: 'sql441.main-hosting.eu',
    port: 3306,
    dialect: 'mysql'
});
exports["default"] = db;
