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
exports.Revoke = exports.GetToken = exports.GetUserInfo = exports.TokenSoffid = exports.ConnetSoffid = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const axios_1 = __importDefault(require("axios"));
const ConnetSoffid = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)('https://api.github.com/users/github');
    const data = yield response.json();
    // console.log(data);
    return data;
});
exports.ConnetSoffid = ConnetSoffid;
const TokenSoffid = () => __awaiter(void 0, void 0, void 0, function* () {
    const str = "hunbeh.jaguar-ep.com:Kiol4762";
    const buff = Buffer.from(str, 'utf-8');
    const base64 = buff.toString('base64');
    // console.log('validamos el base 64 de usuario y contrasenia');
    // console.log(base64);
    // 'grant_type=authorization_code&code=1Zf7O3A2/7HF0wZ3EKgDnPqeDZmDzLhM4WCh4Kb5YvAkpOT+'
    const response = yield (0, node_fetch_1.default)("https://idp.jaguar-ep.com/token", {
        method: 'POST',
        headers: {
            'Authorization': 'Basic aHVuYmVoLmphZ3Vhci1lcC5jb206S2lvbDQ3NjI=',
        },
        body: 'grant_type=authorization_code&code=urqEnPHeKW6LVRQGvxgU8t0TfwEhjx4mKEdvY+68dQX7ZSoY'
    });
    // console.log('Obtención del response directo del servicio');
    // console.log(response);
    // console.log('Response body');
    // console.log(response.body);
    // console.log('Response header');
    // console.log(response.headers);
    // console.log('Response status');
    // console.log(response.status);
    return response;
});
exports.TokenSoffid = TokenSoffid;
const GetUserInfo = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const NombreUsuario = yield (0, axios_1.default)({
        method: 'get',
        url: 'https://idp.jaguar-ep.com/userinfo',
        headers: {
            'Authorization': 'Bearer ' + encodeURIComponent(token),
            'Accept': 'application/json'
        }
    })
        .then((response) => {
        const resp = JSON.stringify(response.data);
        // console.log("Nombre de usuario");
        // console.log(resp);
        return resp;
    })
        .catch((error) => {
        console.log("Error nuevo");
        console.log(error);
        return error;
    });
    // console.log("Nombre de Usuario");
    // console.log(NombreUsuario);
    return NombreUsuario;
});
exports.GetUserInfo = GetUserInfo;
const GetToken = (code) => __awaiter(void 0, void 0, void 0, function* () {
    const TokenJwt = yield (0, axios_1.default)({
        method: 'post',
        url: 'https://idp.jaguar-ep.com/token',
        headers: {
            'Authorization': 'Basic aHVuYmVoLmphZ3Vhci1lcC5jb206S2lvbDQ3NjI=',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: 'grant_type=authorization_code&code=' + encodeURIComponent(code)
    })
        .then((response) => {
        const resp = JSON.stringify(response.data);
        // console.log("Nueva respuesta");
        // console.log(resp);
        // console.log("Despues de la resp");
        return resp;
    })
        .catch((error) => {
        console.log("Error nuevo");
        console.log(error);
        console.log("Despues del error");
        return error;
    });
    console.log("TokenJwt");
    console.log(TokenJwt);
    return TokenJwt;
});
exports.GetToken = GetToken;
const Revoke = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const RespRevoke = yield (0, axios_1.default)({
        method: 'post',
        url: 'https://idp.jaguar-ep.com/revoke',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic aHVuYmVoLmphZ3Vhci1lcC5jb206S2lvbDQ3NjI=',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: 'token_type_hint= access_token&token=' + encodeURIComponent(token)
    })
        .then((response) => {
        //  console.log(response);
        //  console.log(response.status);
        return "OK";
    })
        .catch((error) => {
        console.log(error);
        return "BAD";
    });
    // console.log(RespRevoke);
    return RespRevoke;
});
exports.Revoke = Revoke;
//# sourceMappingURL=conntect-soffid.js.map