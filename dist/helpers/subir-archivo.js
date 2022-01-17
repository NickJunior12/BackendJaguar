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
exports.SubirNoticiaCloudinary = exports.SubirBannerCloudinary = exports.SubirBanner = exports.BorrarImagenCloudinary = exports.BorrarImagen = exports.SubirArchivo = void 0;
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dcjspxg4i',
    api_key: '512599969441776',
    api_secret: 'PLbU7vJmaMVm4brIk1PN7UmZf8E'
});
const SubirArchivo = (id, files, carpeta = '') => {
    return new Promise((resolve, reject) => {
        const { noticiaImagen } = files;
        const nombreCortado = noticiaImagen.name.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];
        const extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];
        if (!extensionesValidas.includes(extension)) {
            reject(`La extensión ${extension} no es válida, permitidas ${extensionesValidas}`);
        }
        const nombreTempo = id + '_' + (0, uuid_1.v4)() + '.' + extension;
        const uploadPath = path_1.default.join(__dirname, '../../public/', carpeta, '/', nombreTempo);
        console.log(__dirname);
        console.log(uploadPath);
        noticiaImagen.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }
            resolve(nombreTempo);
        });
    });
};
exports.SubirArchivo = SubirArchivo;
const BorrarImagen = (nombre, carpeta = '') => {
    return new Promise((resolve, reject) => {
        const pathBorrar = path_1.default.join(__dirname, '../../public/', carpeta, '/', nombre);
        console.log(pathBorrar);
        if (fs_1.default.existsSync(pathBorrar)) {
            console.log('si existe y voy a borrarlo');
            fs_1.default.unlinkSync(pathBorrar);
        }
        resolve(pathBorrar);
    });
};
exports.BorrarImagen = BorrarImagen;
const BorrarImagenCloudinary = (nombreBanner) => __awaiter(void 0, void 0, void 0, function* () {
    const nombre = nombreBanner.split('/');
    const nom = nombre[nombre.length - 1];
    const [public_id] = nom.split('.');
    console.log(public_id);
    cloudinary.uploader.destroy(public_id);
});
exports.BorrarImagenCloudinary = BorrarImagenCloudinary;
const SubirBanner = (files, carpeta = '') => {
    return new Promise((resolve, reject) => {
        const { bannerImg } = files;
        const nombreCortado = bannerImg.name.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];
        const extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];
        if (!extensionesValidas.includes(extension)) {
            reject(`La extensión ${extension} no es válida, permitidas ${extensionesValidas}`);
        }
        const nombreTempo = (0, uuid_1.v4)() + '.' + extension;
        const uploadPath = path_1.default.join(__dirname, '../../public/', carpeta, '/', nombreTempo);
        console.log(__dirname);
        console.log(uploadPath);
        bannerImg.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }
            resolve(nombreTempo);
        });
    });
};
exports.SubirBanner = SubirBanner;
const SubirBannerCloudinary = (files, carpeta = '') => __awaiter(void 0, void 0, void 0, function* () {
    const { bannerImg } = files;
    console.log(bannerImg);
    const tempPath = bannerImg.tempFilePath;
    console.log(tempPath);
    const { secure_url } = yield cloudinary.uploader.upload(tempPath);
    console.log('imprimir respuesta de cloudinary');
    console.log(secure_url);
    return secure_url;
});
exports.SubirBannerCloudinary = SubirBannerCloudinary;
const SubirNoticiaCloudinary = (files) => __awaiter(void 0, void 0, void 0, function* () {
    const { noticiaImagen } = files;
    const tempPath = noticiaImagen.tempFilePath;
    const { secure_url } = yield cloudinary.uploader.upload(tempPath);
    return secure_url;
});
exports.SubirNoticiaCloudinary = SubirNoticiaCloudinary;
//# sourceMappingURL=subir-archivo.js.map