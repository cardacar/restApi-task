"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var taskCtrl = _interopRequireWildcard(require("../controllers/task.controllers"));

//Importando el controller
var router = (0, _express.Router)(); //Ruta para crear una tarea

router.post('/', taskCtrl.createTask); //Ruta para ver todas las tareas

router.get('/', taskCtrl.findAllTask); //Buscando todos los done en true

router.get('/done', taskCtrl.findAllDoneTask); //Ruta para buscar una tarea por id

router.get('/:id', taskCtrl.findOneTask); //Eliminando una tarea

router["delete"]('/:id', taskCtrl.deleteTaks); //Ruta para actualizar la tarea

router.put('/:id', taskCtrl.updateTask);
var _default = router;
exports["default"] = _default;