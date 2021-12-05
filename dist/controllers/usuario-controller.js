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
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarNoticia = exports.nuevaNoticia = exports.getNoticia = exports.getNoticias = void 0;
const getNoticias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notis = yield Noticia.findAll();
    res.json({ notis });
});
exports.getNoticias = getNoticias;
const getNoticia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const notis = yield Noticia.findByPk(id);
    if (notis) {
        res.json({ notis });
    }
    else {
        res.status(404).json({ msg: `No existe la noticia con ese id ${id}` });
    }
});
exports.getNoticia = getNoticia;
const nuevaNoticia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const noticia = Noticia.build(body);
        yield noticia.save();
        res.json(noticia);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador' });
    }
});
exports.nuevaNoticia = nuevaNoticia;
const actualizarNoticia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const noticia = yield Noticia.findByPk(id);
        if (!noticia) {
            return res.status(404).json({
                msg: 'No existe la noticia'
            });
        }
        yield noticia.update(body);
        res.json(noticia);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Comuniquese con el administrador' });
    }
});
exports.actualizarNoticia = actualizarNoticia;
//# sourceMappingURL=usuario-controller.js.map