"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const soffid_controllers_1 = require("../controllers/soffid-controllers");
const router = (0, express_1.Router)();
router.get('/', soffid_controllers_1.ConnectSoffidPaso1);
router.post('/auth', soffid_controllers_1.AuthSoffid);
router.post('/token', soffid_controllers_1.Token);
router.post('/userinfo', soffid_controllers_1.UserInfo);
exports.default = router;
//# sourceMappingURL=soffid-routes.js.map