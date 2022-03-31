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
exports.Token = exports.AuthSoffid = exports.ConnectSoffidPaso1 = void 0;
const conntect_soffid_1 = require("../helpers/conntect-soffid");
const ConnectSoffidPaso1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield (0, conntect_soffid_1.ConnetSoffid)('usuario');
    res.json({ token });
});
exports.ConnectSoffidPaso1 = ConnectSoffidPaso1;
const AuthSoffid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield (0, conntect_soffid_1.AuthorizationSoffid)('', '');
    console.log('controller: ');
    console.log(resp);
    res.json({ resp });
});
exports.AuthSoffid = AuthSoffid;
const Token = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log('code: ' + body.code);
    console.log('nonce: ' + body.nonce);
    const resp = yield (0, conntect_soffid_1.TokenSoffid)(body.code, body.nonce);
    console.log(resp);
    res.json({ resp });
});
exports.Token = Token;
//# sourceMappingURL=soffid-controllers.js.map