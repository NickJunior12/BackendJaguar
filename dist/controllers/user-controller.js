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
exports.login = void 0;
const usuario_models_1 = __importDefault(require("../models/usuario-models"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, pass } = req.body;
    try {
        const _usuario = yield usuario_models_1.default.findOne(usuario);
        if (!_usuario) {
            return res.status(400).json({
                msg: 'Usuario/Password no son correctos'
            });
        }
        console.log(_usuario);
        //    if ( _usuario.activado === 0 ){
        //         return res.status(400).json({
        //         msg: 'Usuario desactivado'
        //         })
        //     }
        //    if ( pass !== _usuario.pass ){
        //     return res.status(400).json({
        //         msg: 'Password incorrecto'
        //         })
        //    }
        return res.json({
            isvalid: true,
            msg: 'Usuario autenticado correctamente'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador' });
    }
});
exports.login = login;
//# sourceMappingURL=user-controller.js.map