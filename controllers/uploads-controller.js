"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.borrarBannersCloudinary = exports.borrarBanners = exports.getBanners = exports.uploadBannerCloudinary = exports.uploadNoticiaCloudinary = exports.uploadBanner = exports.uploadNoticia = void 0;
var subir_archivo_1 = require("../helpers/subir-archivo");
var notis_1 = require("../models/notis");
var banner_model_1 = require("../models/banner-model");
// export const mostrarImagen = async( req: Request, res: Response)=> {
//     const {id} =req.params;
//     try{
//         const noticia = await Noticia.findByPk(id);
//         console.log(noticia);
//         if( !noticia ){
//             return res.status(404).json({
//                 valido: 0,
//                 msg:'No existe la noticia'
//             })
//         }
//         res.json({
//             valido: 1,
//             nombreImagen: noticia.imagen
//         })
//     }catch(err){
//         res.status(400).json(err);
//     }
// }
var uploadNoticia = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, noticia, nombreImagen, bodyUpdate, msg_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (!req.files || Object.keys(req.files).length === 0 || !req.files.noticiaImagen) {
                    return [2 /*return*/, res.status(400).json('No hay archivos para subir.')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, notis_1["default"].findByPk(id)];
            case 2:
                noticia = _a.sent();
                console.log(noticia);
                if (!noticia) {
                    return [2 /*return*/, res.status(404).json({
                            msg: 'No existe la noticia'
                        })];
                }
                return [4 /*yield*/, (0, subir_archivo_1.SubirArchivo)(id, req.files, 'uploadsNoticias')];
            case 3:
                nombreImagen = _a.sent();
                bodyUpdate = {
                    imagen: nombreImagen,
                    id: id
                };
                return [4 /*yield*/, noticia.update(bodyUpdate)];
            case 4:
                _a.sent();
                res.json({ msg: nombreImagen, msg2: noticia });
                return [3 /*break*/, 6];
            case 5:
                msg_1 = _a.sent();
                res.status(400).json(msg_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.uploadNoticia = uploadNoticia;
var uploadBanner = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nombreImagen, bannerBody, banner, msg_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.files || Object.keys(req.files).length === 0 || !req.files.bannerImg) {
                    return [2 /*return*/, res.status(400).json('No hay archivos para subir.')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                console.log(req.files.bannerImg);
                return [4 /*yield*/, (0, subir_archivo_1.SubirBanner)(req.files, 'uploadsBanners')];
            case 2:
                nombreImagen = _a.sent();
                bannerBody = {
                    archivo: nombreImagen,
                    ubicacion: '',
                    orden: 1,
                    activo: 1
                };
                banner = banner_model_1["default"].build(bannerBody);
                return [4 /*yield*/, banner.save()];
            case 3:
                _a.sent();
                res.json({ msg: nombreImagen, msg2: banner });
                return [3 /*break*/, 5];
            case 4:
                msg_2 = _a.sent();
                res.status(400).json(msg_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.uploadBanner = uploadBanner;
var uploadNoticiaCloudinary = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, noticia, nombreImagen, bodyUpdate, msg_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (!req.files || Object.keys(req.files).length === 0 || !req.files.noticiaImagen) {
                    return [2 /*return*/, res.status(400).json('No hay archivos para subir.')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, notis_1["default"].findByPk(id)];
            case 2:
                noticia = _a.sent();
                console.log(noticia);
                if (!noticia) {
                    return [2 /*return*/, res.status(404).json({
                            msg: 'No existe la noticia'
                        })];
                }
                return [4 /*yield*/, (0, subir_archivo_1.SubirNoticiaCloudinary)(req.files)];
            case 3:
                nombreImagen = _a.sent();
                bodyUpdate = {
                    imagen: nombreImagen,
                    id: id
                };
                return [4 /*yield*/, noticia.update(bodyUpdate)];
            case 4:
                _a.sent();
                res.json({ msg: nombreImagen, msg2: noticia });
                return [3 /*break*/, 6];
            case 5:
                msg_3 = _a.sent();
                res.status(400).json(msg_3);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.uploadNoticiaCloudinary = uploadNoticiaCloudinary;
var uploadBannerCloudinary = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nombreImagen, bannerBody, banner, msg_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.files || Object.keys(req.files).length === 0 || !req.files.bannerImg) {
                    return [2 /*return*/, res.status(400).json('No hay archivos para subir.')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, subir_archivo_1.SubirBannerCloudinary)(req.files)];
            case 2:
                nombreImagen = _a.sent();
                console.log('se recupera la respuesta de SubirBannerCloudinary');
                console.log(nombreImagen);
                bannerBody = {
                    archivo: nombreImagen,
                    ubicacion: nombreImagen,
                    orden: 1,
                    activo: 1
                };
                console.log(bannerBody);
                banner = banner_model_1["default"].build(bannerBody);
                return [4 /*yield*/, banner.save()];
            case 3:
                _a.sent();
                res.json({ msg: nombreImagen, msg2: banner });
                return [3 /*break*/, 5];
            case 4:
                msg_4 = _a.sent();
                res.status(400).json(msg_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.uploadBannerCloudinary = uploadBannerCloudinary;
var getBanners = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var banners;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, banner_model_1["default"].findAll({
                    where: {
                        activo: 1
                    },
                    order: [
                        ['id', 'DESC']
                    ]
                })];
            case 1:
                banners = _a.sent();
                res.json({ banners: banners });
                return [2 /*return*/];
        }
    });
}); };
exports.getBanners = getBanners;
var borrarBanners = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, nombreBanner, banner, resp, bodyUpdate, msg_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                nombreBanner = req.body.nombreBanner;
                console.log(nombreBanner);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, banner_model_1["default"].findByPk(id)];
            case 2:
                banner = _a.sent();
                console.log(banner);
                if (!banner) {
                    return [2 /*return*/, res.status(404).json({
                            msg: 'No existe la noticia'
                        })];
                }
                return [4 /*yield*/, (0, subir_archivo_1.BorrarImagen)(nombreBanner, 'uploadsBanners')];
            case 3:
                resp = _a.sent();
                bodyUpdate = {
                    id: id,
                    activo: 0
                };
                return [4 /*yield*/, banner.update(bodyUpdate)];
            case 4:
                _a.sent();
                res.json({ msg: 'Borrado exitosamente ' + nombreBanner });
                return [3 /*break*/, 6];
            case 5:
                msg_5 = _a.sent();
                res.status(400).json(msg_5);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.borrarBanners = borrarBanners;
var borrarBannersCloudinary = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, nombreBanner, banner, bodyUpdate, msg_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                nombreBanner = req.body.nombreBanner;
                console.log(nombreBanner);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, banner_model_1["default"].findByPk(id)];
            case 2:
                banner = _a.sent();
                console.log(banner);
                if (!banner) {
                    return [2 /*return*/, res.status(404).json({
                            msg: 'No existe la noticia'
                        })];
                }
                (0, subir_archivo_1.BorrarImagenCloudinary)(nombreBanner);
                bodyUpdate = {
                    id: id,
                    activo: 0
                };
                return [4 /*yield*/, banner.update(bodyUpdate)];
            case 3:
                _a.sent();
                res.json({ msg: 'Borrado exitosamente ' + nombreBanner });
                return [3 /*break*/, 5];
            case 4:
                msg_6 = _a.sent();
                res.status(400).json(msg_6);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.borrarBannersCloudinary = borrarBannersCloudinary;
