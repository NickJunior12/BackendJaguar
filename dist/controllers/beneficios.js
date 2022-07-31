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
exports.borrarBeneficio = exports.actualizarBeneficio = exports.nuevoBeneficio = exports.findBeneficioText = exports.getBeneficio = exports.getBeneficios = void 0;
const beneficios_1 = __importDefault(require("../models/beneficios"));
const sequelize_1 = require("sequelize");
const getBeneficios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bene = yield beneficios_1.default.findAll({
        where: {
            activado: 1
        },
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({ bene });
});
exports.getBeneficios = getBeneficios;
const getBeneficio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const bene = yield beneficios_1.default.findByPk(id);
    if (bene) {
        res.json({ bene });
    }
    else {
        res.status(404).json({ msg: `No existe el beneficio con ese id ${id}` });
    }
});
exports.getBeneficio = getBeneficio;
const findBeneficioText = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const bene = yield beneficios_1.default.findAll({
        where: {
            titulo: {
                [sequelize_1.Op.substring]: body.buscador
            }
        }
    });
    if (bene) {
        res.json({ bene });
    }
    else {
        res.status(404).json({ msg: `No existe el beneficio con el texto buscado ${body.buscador}` });
    }
});
exports.findBeneficioText = findBeneficioText;
const nuevoBeneficio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const beneficio = beneficios_1.default.build(body);
        yield beneficio.save();
        res.json(beneficio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador' });
    }
});
exports.nuevoBeneficio = nuevoBeneficio;
const actualizarBeneficio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    console.log("entre");
    // res.json("{resp: 'ok'}");
    try {
        const beneficio = yield beneficios_1.default.findByPk(id);
        console.log(beneficio);
        if (!beneficio) {
            return res.status(404).json({
                msg: 'No existe el beneficio'
            });
        }
        console.log("Pase el if, esta bien el beneficio");
        yield beneficio.update(body);
        console.log("Actualizo correctamente el beneficio");
        res.json(beneficio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador' });
    }
});
exports.actualizarBeneficio = actualizarBeneficio;
const borrarBeneficio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const beneficio = yield beneficios_1.default.findByPk(id);
        if (!beneficio) {
            return res.status(404).json({
                msg: 'No existe el beneficio'
            });
        }
        yield beneficio.update({ activado: 0 });
        res.json({
            msg: 'Beneficio eliminado, satisfactoriamente',
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador' });
    }
});
exports.borrarBeneficio = borrarBeneficio;
//# sourceMappingURL=beneficios.js.map