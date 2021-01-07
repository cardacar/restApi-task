import {Router} from 'express'
import Task from '../models/Task'
const router = Router()

router.get('/', (req,res)=>{
    res.send('task')
});

router.post('/', async (req,res)=>{
    const newTask = new Task({title: req.body.title, description: req.body.description})
    await newTask.save();
    console.log(newTask)
    res.json('New task create')
})

export default router;