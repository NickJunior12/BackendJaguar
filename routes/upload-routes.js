"use strict";
exports.__esModule = true;
var express_1 = require("express");
var uploads_controller_1 = require("../controllers/uploads-controller");
var router = (0, express_1.Router)();
router.post('/noticia/:id', uploads_controller_1.uploadNoticiaCloudinary);
router.post('/banner', uploads_controller_1.uploadBannerCloudinary);
router.get('/get-banners', uploads_controller_1.getBanners);
router.post('/borrar/:id', uploads_controller_1.borrarBannersCloudinary);
exports["default"] = router;
