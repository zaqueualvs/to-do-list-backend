import express from 'express';
import router from './router.js';
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

export default app;
