"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Student = require("../controllers/Student.controller");

var router = (0, _express.Router)();
router.route("/").post(_Student.SaveStudent);
var _default = router;
exports["default"] = _default;