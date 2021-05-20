import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js';

//? configs
dotenv.config();
const app = express();
const PORT = 8000;

//? middlewares
app.use(morgan('common'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hola');
});

//? routes middlewares
app.use('/tasks', todoRouter);

//? DB connection
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Connected with Mongo Atlas')
);

app.listen(PORT, () => {
  console.log(`Server running on: hhtp://localhost:${PORT} `);
});
