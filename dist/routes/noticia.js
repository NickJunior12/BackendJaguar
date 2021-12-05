"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noticias_1 = require("../controllers/noticias");
const router = (0, express_1.Router)();
router.get('/', noticias_1.getNoticias);
router.get('/:id', noticias_1.getNoticia);
router.post('/', noticias_1.nuevaNoticia);
router.post('/actualizarnoticia/:id', noticias_1.actualizarNoticia);
router.post('/login', noticias_1.login);
exports.default = router;
//# sourceMappingURL=noticia.js.map