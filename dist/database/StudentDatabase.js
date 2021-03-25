"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStudentById = exports.deleteStudentById = exports.saveStudent = exports.getStudentById = exports.getAllStudents = void 0;

var _database = require("./config/database");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAllStudents = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _yield$sequelize$quer, _yield$sequelize$quer2, results, metadata;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _database.sequelize.query('SELECT * FROM Student');

          case 3:
            _yield$sequelize$quer = _context.sent;
            _yield$sequelize$quer2 = _slicedToArray(_yield$sequelize$quer, 2);
            results = _yield$sequelize$quer2[0];
            metadata = _yield$sequelize$quer2[1];
            console.log(results);
            return _context.abrupt("return", results);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getAllStudents() {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllStudents = getAllStudents;

var getStudentById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var _yield$sequelize$quer3, _yield$sequelize$quer4, results, metadata;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _database.sequelize.query('SELECT * FROM Student WHERE idStudent = :idStudent', {
              replacements: {
                idStudent: id
              }
            });

          case 3:
            _yield$sequelize$quer3 = _context2.sent;
            _yield$sequelize$quer4 = _slicedToArray(_yield$sequelize$quer3, 2);
            results = _yield$sequelize$quer4[0];
            metadata = _yield$sequelize$quer4[1];
            return _context2.abrupt("return", results);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function getStudentById(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getStudentById = getStudentById;

var saveStudent = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(nameVariable, ageVariable) {
    var _yield$sequelize$quer5, _yield$sequelize$quer6, results, metadata;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _database.sequelize.query('INSERT INTO Student (nameStudent, ageStudent) VALUES( :nameStudent, :ageStudent)', {
              replacements: {
                nameStudent: nameVariable,
                ageStudent: ageVariable
              }
            });

          case 3:
            _yield$sequelize$quer5 = _context3.sent;
            _yield$sequelize$quer6 = _slicedToArray(_yield$sequelize$quer5, 2);
            results = _yield$sequelize$quer6[0];
            metadata = _yield$sequelize$quer6[1];
            return _context3.abrupt("return", "The student was created");

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function saveStudent(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.saveStudent = saveStudent;

var deleteStudentById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(idVariable) {
    var _yield$sequelize$quer7, _yield$sequelize$quer8, results, metadata;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _database.sequelize.query('DELETE Student WHERE idStudent = :idStudent', {
              replacements: {
                idStudent: idVariable
              }
            });

          case 3:
            _yield$sequelize$quer7 = _context4.sent;
            _yield$sequelize$quer8 = _slicedToArray(_yield$sequelize$quer7, 2);
            results = _yield$sequelize$quer8[0];
            metadata = _yield$sequelize$quer8[1];
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function deleteStudentById(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteStudentById = deleteStudentById;

var updateStudentById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(idVariable, nameVariable, ageVariable) {
    var _yield$sequelize$quer9, _yield$sequelize$quer10, results, metadata;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _database.sequelize.query('UPDATE Student SET nameStudent = :nameStudent, ageStudent = :ageStudent WHERE idStudent = :idStudent', {
              replacements: {
                idStudent: idVariable,
                nameStudent: nameVariable,
                ageStudent: ageVariable
              }
            });

          case 3:
            _yield$sequelize$quer9 = _context5.sent;
            _yield$sequelize$quer10 = _slicedToArray(_yield$sequelize$quer9, 2);
            results = _yield$sequelize$quer10[0];
            metadata = _yield$sequelize$quer10[1];
            return _context5.abrupt("return", "The student was updated");

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));

  return function updateStudentById(_x5, _x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}(); //UPDATE Student SET nameStudent = 'Pablo', ageStudent = 11 WHERE idStudent = 5


exports.updateStudentById = updateStudentById;