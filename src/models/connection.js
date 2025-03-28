import postgres from 'postgres';
import 'dotenv/config';

const host = process.env.PG_HOST;
const user = process.env.PG_USER;
const password = process.env.PG_PASSWORD;
const database = process.env.PG_DB;

const url = `postgresql://${user}:${password}@${host}/${database}`;
const connection = postgres(url, { ssl: 'require' });
export default connection;
