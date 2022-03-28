"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const soffid_controllers_1 = require("../controllers/soffid-controllers");
const router = (0, express_1.Router)();
router.get('/', soffid_controllers_1.ConnectSoffidPaso1);
exports.default = router;
//# sourceMappingURL=soffid-routes.js.map