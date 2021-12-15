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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarBanners = exports.getBanners = exports.uploadBanner = exports.uploadNoticia = void 0;
const subir_archivo_1 = require("../helpers/subir-archivo");
const notis_1 = __importDefault(require("../models/notis"));
const banner_model_1 = __importDefault(require("../models/banner-model"));
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
const uploadNoticia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.noticiaImagen) {
        return res.status(400).json('No hay archivos para subir.');
    }
    try {
        const noticia = yield notis_1.default.findByPk(id);
        console.log(noticia);
        if (!noticia) {
            return res.status(404).json({
                msg: 'No existe la noticia'
            });
        }
        const nombreImagen = yield (0, subir_archivo_1.SubirArchivo)(id, req.files, 'uploadsNoticias');
        const bodyUpdate = {
            imagen: nombreImagen,
            id
        };
        yield noticia.update(bodyUpdate);
        res.json({ msg: nombreImagen, msg2: noticia });
    }
    catch (msg) {
        res.status(400).json(msg);
    }
});
exports.uploadNoticia = uploadNoticia;
const uploadBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.bannerImg) {
        return res.status(400).json('No hay archivos para subir.');
    }
    try {
        const nombreImagen = yield (0, subir_archivo_1.SubirBanner)(req.files, 'uploadsBanners');
        const bannerBody = {
            archivo: nombreImagen,
            ubicacion: '',
            orden: 1,
            activo: 1
        };
        const banner = banner_model_1.default.build(bannerBody);
        yield banner.save();
        res.json({ msg: nombreImagen, msg2: banner });
    }
    catch (msg) {
        res.status(400).json(msg);
    }
});
exports.uploadBanner = uploadBanner;
const getBanners = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const banners = yield banner_model_1.default.findAll({
        where: {
            activo: 1
        },
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({ banners });
});
exports.getBanners = getBanners;
const borrarBanners = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombreBanner } = req.body;
    console.log(nombreBanner);
    try {
        const banner = yield banner_model_1.default.findByPk(id);
        console.log(banner);
        if (!banner) {
            return res.status(404).json({
                msg: 'No existe la noticia'
            });
        }
        const resp = yield (0, subir_archivo_1.BorrarImagen)(nombreBanner, 'uploadsBanners');
        const bodyUpdate = {
            id,
            activo: 0
        };
        yield banner.update(bodyUpdate);
        res.json({ msg: 'Borrado exitosamente ' + nombreBanner });
    }
    catch (msg) {
        res.status(400).json(msg);
    }
});
exports.borrarBanners = borrarBanners;
//# sourceMappingURL=uploads-controller.js.map