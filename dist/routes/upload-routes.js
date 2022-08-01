"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploads_controller_1 = require("../controllers/uploads-controller");
const router = (0, express_1.Router)();
router.post('/noticia/:id', uploads_controller_1.uploadNoticiaCloudinary);
router.post('/banner', uploads_controller_1.uploadBannerCloudinary);
router.post('/beneficio/:id', uploads_controller_1.uploadBeneficioCloudinary);
router.get('/get-banners', uploads_controller_1.getBanners);
router.post('/borrar/:id', uploads_controller_1.borrarBannersCloudinary);
exports.default = router;
//# sourceMappingURL=upload-routes.js.map