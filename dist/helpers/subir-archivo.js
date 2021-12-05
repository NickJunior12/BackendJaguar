"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubirBanner = exports.SubirArchivo = void 0;
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
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
//# sourceMappingURL=subir-archivo.js.map