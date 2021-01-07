import {Router} from 'express'

//Importando el controller
import * as taskCtrl from "../controllers/task.controllers";
const router = Router()

//Ruta para crear una tarea
router.post('/', taskCtrl.createTask);
//Ruta para ver todas las tareas
router.get('/', taskCtrl.findAllTask);
//Ruta para buscar una tarea por id
router.get('/:id', taskCtrl.findOneTask);
//Eliminando una tarea
router.delete('/:id', taskCtrl.deleteTaks);

export default router;