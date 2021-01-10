//Importando el modelo
import Task from '../models/Task'
import { getPagination } from "../libs/getPagination";

export const findAllTask = async (req, res) => {
    //pidiendo datos de Task
    try {
        const {size,page} = req.query
        const {limit, offset} = getPagination(page, size)
        const tasks = await Task.paginate({},{offset, limit})
        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong retrieving the task'
        })
    }
}

export const createTask = async (req, res) => {
    //Guardando datos en Task
    if (!req.body.title) {
        return res.status(400).send('Content cannot be empty')
    }
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        })
        const taskSave = await newTask.save();
        res.json(taskSave)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong creating a task'
        })
    }
}


export const findOneTask = async (req, res) => {
    try {
        const { id } = req.params;
        //Buscando una tarea en la bd
        const task = await Task.findById(id);
        if (!task)
            return res
                .status(400)
                .json({ message: `Task with id ${id} does not exists ` })
        res.json(task)
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error retrieving task with id ${id}`
        })
    }
}

export const deleteTaks = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id)
        res.json({
            message: 'Task deleted succesfully'
        })

    } catch (error) {
        res.status(500).json({
            message: `Connot delete task with id: ${id}`
        })
    }
}


export const findAllDoneTask = async (req, res) => {
    try {
        const tasks = await Task.find({ done: true });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Cannot task in bd'
        })
    }
}

export const updateTask = async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, req.body)
        res.json({ message: "Task was update succesfully" })
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Cannot updated task in bd'
        })
    }

}