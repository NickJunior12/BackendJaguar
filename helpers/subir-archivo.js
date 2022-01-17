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
exports.SubirNoticiaCloudinary = exports.SubirBannerCloudinary = exports.SubirBanner = exports.BorrarImagenCloudinary = exports.BorrarImagen = exports.SubirArchivo = void 0;
var path_1 = require("path");
var uuid_1 = require("uuid");
var fs_1 = require("fs");
var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dcjspxg4i',
    api_key: '512599969441776',
    api_secret: 'PLbU7vJmaMVm4brIk1PN7UmZf8E'
});
var SubirArchivo = function (id, files, carpeta) {
    if (carpeta === void 0) { carpeta = ''; }
    return new Promise(function (resolve, reject) {
        var noticiaImagen = files.noticiaImagen;
        var nombreCortado = noticiaImagen.name.split('.');
        var extension = nombreCortado[nombreCortado.length - 1];
        var extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];
        if (!extensionesValidas.includes(extension)) {
            reject("La extensi\u00F3n ".concat(extension, " no es v\u00E1lida, permitidas ").concat(extensionesValidas));
        }
        var nombreTempo = id + '_' + (0, uuid_1.v4)() + '.' + extension;
        var uploadPath = path_1["default"].join(__dirname, '../../public/', carpeta, '/', nombreTempo);
        console.log(__dirname);
        console.log(uploadPath);
        noticiaImagen.mv(uploadPath, function (err) {
            if (err) {
                reject(err);
            }
            resolve(nombreTempo);
        });
    });
};
exports.SubirArchivo = SubirArchivo;
var BorrarImagen = function (nombre, carpeta) {
    if (carpeta === void 0) { carpeta = ''; }
    return new Promise(function (resolve, reject) {
        var pathBorrar = path_1["default"].join(__dirname, '../../public/', carpeta, '/', nombre);
        console.log(pathBorrar);
        if (fs_1["default"].existsSync(pathBorrar)) {
            console.log('si existe y voy a borrarlo');
            fs_1["default"].unlinkSync(pathBorrar);
        }
        resolve(pathBorrar);
    });
};
exports.BorrarImagen = BorrarImagen;
var BorrarImagenCloudinary = function (nombreBanner) { return __awaiter(void 0, void 0, void 0, function () {
    var nombre, nom, public_id;
    return __generator(this, function (_a) {
        nombre = nombreBanner.split('/');
        nom = nombre[nombre.length - 1];
        public_id = nom.split('.')[0];
        console.log(public_id);
        cloudinary.uploader.destroy(public_id);
        return [2 /*return*/];
    });
}); };
exports.BorrarImagenCloudinary = BorrarImagenCloudinary;
var SubirBanner = function (files, carpeta) {
    if (carpeta === void 0) { carpeta = ''; }
    return new Promise(function (resolve, reject) {
        var bannerImg = files.bannerImg;
        var nombreCortado = bannerImg.name.split('.');
        var extension = nombreCortado[nombreCortado.length - 1];
        var extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];
        if (!extensionesValidas.includes(extension)) {
            reject("La extensi\u00F3n ".concat(extension, " no es v\u00E1lida, permitidas ").concat(extensionesValidas));
        }
        var nombreTempo = (0, uuid_1.v4)() + '.' + extension;
        var uploadPath = path_1["default"].join(__dirname, '../../public/', carpeta, '/', nombreTempo);
        console.log(__dirname);
        console.log(uploadPath);
        bannerImg.mv(uploadPath, function (err) {
            if (err) {
                reject(err);
            }
            resolve(nombreTempo);
        });
    });
};
exports.SubirBanner = SubirBanner;
var SubirBannerCloudinary = function (files, carpeta) {
    if (carpeta === void 0) { carpeta = ''; }
    return __awaiter(void 0, void 0, void 0, function () {
        var bannerImg, tempPath, secure_url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bannerImg = files.bannerImg;
                    console.log(bannerImg);
                    tempPath = bannerImg.tempFilePath;
                    console.log(tempPath);
                    return [4 /*yield*/, cloudinary.uploader.upload(tempPath)];
                case 1:
                    secure_url = (_a.sent()).secure_url;
                    console.log('imprimir respuesta de cloudinary');
                    console.log(secure_url);
                    return [2 /*return*/, secure_url];
            }
        });
    });
};
exports.SubirBannerCloudinary = SubirBannerCloudinary;
var SubirNoticiaCloudinary = function (files) { return __awaiter(void 0, void 0, void 0, function () {
    var noticiaImagen, tempPath, secure_url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                noticiaImagen = files.noticiaImagen;
                tempPath = noticiaImagen.tempFilePath;
                return [4 /*yield*/, cloudinary.uploader.upload(tempPath)];
            case 1:
                secure_url = (_a.sent()).secure_url;
                return [2 /*return*/, secure_url];
        }
    });
}); };
exports.SubirNoticiaCloudinary = SubirNoticiaCloudinary;
