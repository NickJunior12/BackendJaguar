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
exports.Revoke = exports.GetToken = exports.GetUserInfo = exports.TokenSoffid = exports.ConnetSoffid = void 0;
var node_fetch_1 = require("node-fetch");
var axios_1 = require("axios");
var ConnetSoffid = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, node_fetch_1["default"])('https://api.github.com/users/github')];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                console.log(data);
                return [2 /*return*/, data];
        }
    });
}); };
exports.ConnetSoffid = ConnetSoffid;
var TokenSoffid = function () { return __awaiter(void 0, void 0, void 0, function () {
    var str, buff, base64, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                str = "hunbeh.jaguar-ep.com:Kiol4762";
                buff = Buffer.from(str, 'utf-8');
                base64 = buff.toString('base64');
                console.log('validamos el base 64 de usuario y contrasenia');
                console.log(base64);
                return [4 /*yield*/, (0, node_fetch_1["default"])("https://idp.jaguar-ep.com/token", {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Basic aHVuYmVoLmphZ3Vhci1lcC5jb206S2lvbDQ3NjI='
                        },
                        body: 'grant_type=authorization_code&code=urqEnPHeKW6LVRQGvxgU8t0TfwEhjx4mKEdvY+68dQX7ZSoY'
                    })];
            case 1:
                response = _a.sent();
                console.log('Obtención del response directo del servicio');
                console.log(response);
                console.log('Response body');
                console.log(response.body);
                console.log('Response header');
                console.log(response.headers);
                console.log('Response status');
                console.log(response.status);
                return [2 /*return*/, response];
        }
    });
}); };
exports.TokenSoffid = TokenSoffid;
var GetUserInfo = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var NombreUsuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, axios_1["default"])({
                    method: 'get',
                    url: 'https://idp.jaguar-ep.com/userinfo',
                    headers: {
                        'Authorization': 'Bearer ' + encodeURIComponent(token),
                        'Accept': 'application/json'
                    }
                })
                    .then(function (response) {
                    var resp = JSON.stringify(response.data);
                    console.log("Nombre de usuario");
                    console.log(resp);
                    return resp;
                })["catch"](function (error) {
                    console.log("Error nuevo");
                    console.log(error);
                    return error;
                })];
            case 1:
                NombreUsuario = _a.sent();
                console.log("Nombre de Usuario");
                console.log(NombreUsuario);
                return [2 /*return*/, NombreUsuario];
        }
    });
}); };
exports.GetUserInfo = GetUserInfo;
var GetToken = function (code) { return __awaiter(void 0, void 0, void 0, function () {
    var TokenJwt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, axios_1["default"])({
                    method: 'post',
                    url: 'https://idp.jaguar-ep.com/token',
                    headers: {
                        'Authorization': 'Basic aHVuYmVoLmphZ3Vhci1lcC5jb206S2lvbDQ3NjI=',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: 'grant_type=authorization_code&code=' + encodeURIComponent(code)
                })
                    .then(function (response) {
                    var resp = JSON.stringify(response.data);
                    console.log("Nueva respuesta");
                    console.log(resp);
                    console.log("Despues de la resp");
                    return resp;
                })["catch"](function (error) {
                    console.log("Error nuevo");
                    console.log(error);
                    console.log("Despues del error");
                    return error;
                })];
            case 1:
                TokenJwt = _a.sent();
                console.log("TokenJwt");
                console.log(TokenJwt);
                return [2 /*return*/, TokenJwt];
        }
    });
}); };
exports.GetToken = GetToken;
var Revoke = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var RespRevoke;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, axios_1["default"])({
                    method: 'post',
                    url: 'https://idp.jaguar-ep.com/revoke',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Basic aHVuYmVoLmphZ3Vhci1lcC5jb206S2lvbDQ3NjI=',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: 'token_type_hint= access_token&token=' + encodeURIComponent(token)
                })
                    .then(function (response) {
                    console.log(response);
                    console.log(response.status);
                    return "OK";
                })["catch"](function (error) {
                    console.log(error);
                    return "BAD";
                })];
            case 1:
                RespRevoke = _a.sent();
                console.log(RespRevoke);
                return [2 /*return*/, RespRevoke];
        }
    });
}); };
exports.Revoke = Revoke;
