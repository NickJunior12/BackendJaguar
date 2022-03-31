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
exports.AuthorizationSoffid = exports.TokenSoffid = exports.ConnetSoffid = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const ConnetSoffid = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)('https://api.github.com/users/github');
    const data = yield response.json();
    console.log(data);
    return data;
});
exports.ConnetSoffid = ConnetSoffid;
const TokenSoffid = (code, nonce) => __awaiter(void 0, void 0, void 0, function* () {
    const str = "hunbeh.jaguar-ep.com:Kiol4762";
    const buff = Buffer.from(str, 'utf-8');
    const base64 = buff.toString('base64');
    console.log('validamos el base 64 de usuario y contrasenia');
    console.log(base64);
    const response = yield (0, node_fetch_1.default)("https://hunbeh.jaguar-ep.com/token", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            "Authorization": 'Basic ' + base64
        },
        body: JSON.stringify("{'grant_type': 'authorization_code', 'code': '" + code + "' }")
    });
    console.log('Obtención del response directo del servicio');
    console.log(response);
    return response;
});
exports.TokenSoffid = TokenSoffid;
const AuthorizationSoffid = (usuario, pass) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)("https://hunbeh.jaguar-ep.com/openidresponse", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            "Authorization": 'Basic dGVzdDp0ZXN0'
        },
        body: JSON.stringify("{'username':'xxx', 'password': 'xxx'}")
    });
    console.log('Obtención del response directo del servicio');
    console.log(response);
    return response;
});
exports.AuthorizationSoffid = AuthorizationSoffid;
//# sourceMappingURL=conntect-soffid.js.map