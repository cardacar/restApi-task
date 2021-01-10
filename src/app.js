import express from 'express';
import morgan from 'morgan';
//Modulo que permite peticiones de otro servidor
import cors from 'cors';
import taskRoutes from "./routes/taskRoute";

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
//Para que entienda las peticiones que llegan desde un formulario html
app.use(express.urlencoded({extended: false}));

//routes
app.get('/', (req, res) => {
    res.json({ message: "Welcome to my application" });
});

app.use('/api/task', taskRoutes);

export default app;