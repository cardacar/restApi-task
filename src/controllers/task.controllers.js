//Importando el modelo
import Task from '../models/Task'

export const findAllTask = async (req,res)=>{
    //pidiendo datos de Task
    const tasks = await Task.find()
    res.json(tasks);
}

export const createTask = async (req,res)=>{
    //Guardando datos en Task
    const newTask = new Task({title: req.body.title, description: req.body.description})
    const taskSave = await newTask.save();
    res.json(taskSave)
}

export const findOneTask = async (req, res)=>{
    //Buscando una tarea en la bd
    const task = await Task.findById(req.params.id)
    res.json(task)
}

export const deleteTaks = async(req,res) =>{

    await Task.findByIdAndDelete(req.params.id)
    res.json({
        message: 'Task deleted succesfully'
    })
}