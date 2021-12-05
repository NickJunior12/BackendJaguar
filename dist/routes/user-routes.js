"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controler_1 = require("../controllers/user-controler");
const router = (0, express_1.Router)();
router.get('/', user_controler_1.getUsers);
exports.default = router;
//# sourceMappingURL=user-routes.js.map