"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/config/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Student = _database.sequelize.define('student', {
  idStudent: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nameStudent: {
    type: _sequelize["default"].TEXT
  },
  ageStudent: {
    type: _sequelize["default"].INTEGER
  }
});

var _default = Student;
exports["default"] = _default;