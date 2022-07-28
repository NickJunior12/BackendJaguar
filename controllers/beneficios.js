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
exports.borrarBeneficio = exports.actualizarBeneficio = exports.nuevoBeneficio = exports.findBeneficioText = exports.getBeneficio = exports.getBeneficios = void 0;
var notis_1 = require("../models/notis");
var sequelize_1 = require("sequelize");
var getBeneficios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var bene;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, notis_1["default"].findAll({
                    where: {
                        activado: 1
                    },
                    order: [
                        ['id', 'DESC']
                    ]
                })];
            case 1:
                bene = _a.sent();
                res.json({ bene: bene });
                return [2 /*return*/];
        }
    });
}); };
exports.getBeneficios = getBeneficios;
var getBeneficio = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, bene;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, notis_1["default"].findByPk(id)];
            case 1:
                bene = _a.sent();
                if (bene) {
                    res.json({ bene: bene });
                }
                else {
                    res.status(404).json({ msg: "No existe el beneficio con ese id ".concat(id) });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.getBeneficio = getBeneficio;
var findBeneficioText = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, bene;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                body = req.body;
                return [4 /*yield*/, notis_1["default"].findAll({
                        where: {
                            titulo: (_a = {},
                                _a[sequelize_1.Op.substring] = body.buscador,
                                _a)
                        }
                    })];
            case 1:
                bene = _b.sent();
                if (bene) {
                    res.json({ bene: bene });
                }
                else {
                    res.status(404).json({ msg: "No existe el beneficio con el texto buscado ".concat(body.buscador) });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.findBeneficioText = findBeneficioText;
var nuevoBeneficio = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, beneficio, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                beneficio = notis_1["default"].build(body);
                return [4 /*yield*/, beneficio.save()];
            case 2:
                _a.sent();
                res.json(beneficio);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                res.status(500).json({ msg: 'Comuniquese con el administrador' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.nuevoBeneficio = nuevoBeneficio;
var actualizarBeneficio = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, beneficio, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                body = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, notis_1["default"].findByPk(id)];
            case 2:
                beneficio = _a.sent();
                if (!beneficio) {
                    return [2 /*return*/, res.status(404).json({
                            msg: 'No existe 3l beneficio'
                        })];
                }
                return [4 /*yield*/, beneficio.update(body)];
            case 3:
                _a.sent();
                res.json(beneficio);
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.log(error_2);
                res.status(500).json({ msg: 'Comuniquese con el administrador' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.actualizarBeneficio = actualizarBeneficio;
var borrarBeneficio = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, beneficio, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, notis_1["default"].findByPk(id)];
            case 2:
                beneficio = _a.sent();
                if (!beneficio) {
                    return [2 /*return*/, res.status(404).json({
                            msg: 'No existe el beneficio'
                        })];
                }
                return [4 /*yield*/, beneficio.update({ activado: 0 })];
            case 3:
                _a.sent();
                res.json({
                    msg: 'Beneficio eliminado, satisfactoriamente'
                });
                return [3 /*break*/, 5];
            case 4:
                error_3 = _a.sent();
                console.log(error_3);
                res.status(500).json({ msg: 'Comuniquese con el administrador' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.borrarBeneficio = borrarBeneficio;
