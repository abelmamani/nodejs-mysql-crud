import express from 'express';
import busServiceRouter from './routes/bus.service.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/bus-service', busServiceRouter);

app.listen(PORT, () => {
    console.log("Server is running in port "+PORT);
});