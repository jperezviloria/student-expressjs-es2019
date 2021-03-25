"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Student = require("../controllers/Student.controller");

//import {getAllStudents} from "../database/StudentDatabase"
var router = (0, _express.Router)();
router.route("/").post(_Student.SaveStudent).get(_Student.GetAllStudents).put(_Student.UpdateStudentById);
router.route("/:idStudent").get(_Student.GetStudentById)["delete"](_Student.DeleteStudentById);
var _default = router;
exports["default"] = _default;