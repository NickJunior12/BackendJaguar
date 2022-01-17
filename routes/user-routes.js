"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_controler_1 = require("../controllers/user-controler");
var router = (0, express_1.Router)();
router.get('/', user_controler_1.getUsers);
exports["default"] = router;
