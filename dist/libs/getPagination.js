"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPagination = void 0;

var getPagination = function getPagination(page, size) {
  //Si existe un zise lo inicializo, de lo contrario por defecto es 3
  var limit = size ? +size : 3;
  var offset = page ? page * limit : 0;
  return {
    limit: limit,
    offset: offset
  };
};

exports.getPagination = getPagination;