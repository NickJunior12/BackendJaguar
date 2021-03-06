"use strict";
exports.__esModule = true;
var express_1 = require("express");
var noticias_1 = require("../controllers/noticias");
var router = (0, express_1.Router)();
router.get('/', noticias_1.getNoticias);
router.get('/:id', noticias_1.getNoticia);
router.post('/', noticias_1.nuevaNoticia);
router.post('/actualizarnoticia/:id', noticias_1.actualizarNoticia);
router.post('/login', noticias_1.login);
router.post('/buscador', noticias_1.findNoticiaText);
router["delete"]('/:id', noticias_1.borrarNoticia);
exports["default"] = router;
