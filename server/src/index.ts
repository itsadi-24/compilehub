import express from 'express';
import cors from 'cors';
const app = express();
import { config } from 'dotenv';
import { dbConnect } from './lib/dbConnect';
import { compilerRouter } from './routes/compilerRouter';

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173', process.env.CLIENT_URL!],
  })
);
app.use(express.json());
config();

app.use('/compiler', compilerRouter);

dbConnect();
app.listen(4000, () => {
  console.log('http://localhost:4000');
});
