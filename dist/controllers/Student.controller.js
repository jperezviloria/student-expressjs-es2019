"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveStudent = void 0;

var SaveStudent = function SaveStudent(request, response) {
  console.log(request.body);
  response.send("received");
};

exports.SaveStudent = SaveStudent;