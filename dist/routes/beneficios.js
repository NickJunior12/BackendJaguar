"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const beneficios_1 = require("../controllers/beneficios");
const router = (0, express_1.Router)();
router.get('/', beneficios_1.getBeneficios);
router.get('/:id', beneficios_1.getBeneficio);
router.post('/', beneficios_1.nuevoBeneficio);
router.post('/actualizarBeneficio/:id', beneficios_1.actualizarBeneficio);
router.post('/buscador', beneficios_1.findBeneficioText);
router.delete('/:id', beneficios_1.borrarBeneficio);
router.get('/documentos/:id', beneficios_1.getDocumentos);
router.post('/documentos', beneficios_1.nuevoDocumento);
router.post('/documentos/update/:id', beneficios_1.actualizarDocumento);
router.delete('/documentos/borrado/:id', beneficios_1.borrarDocumento);
exports.default = router;
//# sourceMappingURL=beneficios.js.map