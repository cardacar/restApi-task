import express from 'express';
import taskRoutes from "./routes/taskRoute";

const app = express();

app.set('port', process.env.PORT ||3000);

app.get('/', (req,res) =>{
    res.json({message: "Welcome to my application"});
});

app.use('/api/task',taskRoutes)

export default app;