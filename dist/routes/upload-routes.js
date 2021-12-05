"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploads_controller_1 = require("../controllers/uploads-controller");
const router = (0, express_1.Router)();
router.post('/noticia/:id', uploads_controller_1.uploadNoticia);
router.post('/banner', uploads_controller_1.uploadBanner);
router.get('/get-banners', uploads_controller_1.getBanners);
exports.default = router;
//# sourceMappingURL=upload-routes.js.map