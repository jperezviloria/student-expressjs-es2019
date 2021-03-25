"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateStudentById = exports.DeleteStudentById = exports.SaveStudent = exports.GetStudentById = exports.GetAllStudents = void 0;

var _StudentDatabase = require("../database/StudentDatabase");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var GetAllStudents = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var students;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _StudentDatabase.getAllStudents)();

          case 2:
            students = _context.sent;
            _context.prev = 3;

            if (!(students != "")) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.json({
              status: 200,
              message: "The students was found",
              data: students
            }));

          case 8:
            return _context.abrupt("return", res.json({
              status: 404,
              message: "The students was not found"
            }));

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", res.json({
              status: 500,
              message: _context.t0
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 11]]);
  }));

  return function GetAllStudents(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetAllStudents = GetAllStudents;

var GetStudentById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var idStudent, student;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idStudent = req.params.idStudent;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _StudentDatabase.getStudentById)(idStudent);

          case 4:
            student = _context2.sent;

            if (!(student != "")) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.json({
              status: 200,
              message: "The students with the id: ".concat(idStudent, " was found"),
              data: student
            }));

          case 9:
            return _context2.abrupt("return", res.json({
              status: 404,
              message: "The students with the id: ".concat(idStudent, " was not found")
            }));

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.json({
              status: 500,
              message: _context2.t0
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));

  return function GetStudentById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.GetStudentById = GetStudentById;

var SaveStudent = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nameStudent, ageStudent, newStudent;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nameStudent = _req$body.nameStudent, ageStudent = _req$body.ageStudent;
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _StudentDatabase.saveStudent)(nameStudent, ageStudent);

          case 4:
            newStudent = _context3.sent;
            console.log(newStudent);

            if (!(newStudent == "The student was created")) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.send({
              status: 201,
              message: "Student was created"
            }));

          case 8:
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.json({
              status: 500,
              message: _context3.t0
            }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function SaveStudent(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.SaveStudent = SaveStudent;

var DeleteStudentById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var idStudent, student;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            idStudent = req.params.idStudent;
            _context4.prev = 1;
            _context4.next = 4;
            return (0, _StudentDatabase.deleteStudentById)(idStudent);

          case 4:
            student = _context4.sent;
            return _context4.abrupt("return", res.json({
              status: 200,
              message: "The students with the id: ".concat(idStudent, " was deleted")
            }));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            return _context4.abrupt("return", res.json({
              status: 500,
              message: _context4.t0
            }));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function DeleteStudentById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.DeleteStudentById = DeleteStudentById;

var UpdateStudentById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$body2, idStudent, nameStudent, ageStudent, updatedStudent;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, idStudent = _req$body2.idStudent, nameStudent = _req$body2.nameStudent, ageStudent = _req$body2.ageStudent;
            _context5.prev = 1;
            _context5.next = 4;
            return (0, _StudentDatabase.updateStudentById)(idStudent, nameStudent, ageStudent);

          case 4:
            updatedStudent = _context5.sent;
            console.log(updatedStudent);

            if (!(updatedStudent == "The student was updated")) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.send({
              status: 200,
              message: "Student was updated"
            }));

          case 8:
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](1);
            return _context5.abrupt("return", res.json({
              status: 500,
              message: _context5.t0
            }));

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 10]]);
  }));

  return function UpdateStudentById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.UpdateStudentById = UpdateStudentById;