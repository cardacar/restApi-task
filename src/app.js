import express from 'express';
import taskRoutes from "./routes/taskRoute";

const app = express();

//Settings
app.set('port', process.env.PORT ||3000);

app.use(express.json())

//routes
app.get('/', (req,res) =>{
    res.json({message: "Welcome to my application"});
});

app.use('/api/task',taskRoutes)

export default app;