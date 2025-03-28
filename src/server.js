import app from './app.js';
import 'dotenv/config';

const PORT = process.env.PORT || 3333;

app.listen({
  host: '0.0.0.0',
  port: PORT,
});
