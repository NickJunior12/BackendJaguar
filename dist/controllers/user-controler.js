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
exports.login = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../models/user-model"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json({
        msg: 'Get de prueba para el api de usuarios'
    });
});
exports.getUsers = getUsers;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const user = yield user_model_1.default.findAll({
            where: {
                usuario: body.usuario,
                pass: body.pass,
                activado: 1
            }
        });
        if (user.length === 0) {
            res.status(500).json({
                valido: false,
                msg: 'El usuario y/o contraseña son erroneos'
            });
        }
        res.json({
            valido: 1,
            msg: 'Usuario validado',
            user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador ' + error });
    }
});
exports.login = login;
//# sourceMappingURL=user-controler.js.map