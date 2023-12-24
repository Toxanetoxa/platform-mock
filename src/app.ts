import express from 'express';
import bodyParser from "body-parser";
import { router as dataRouter } from './routes';

const app = express();
const port = 5555;

app.use(bodyParser.json());
app.use('/api', dataRouter);

app.listen(port, () => {
    console.log(`Сервер запущен по адресу http://localhost:${port}`);
});
