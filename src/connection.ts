import dotenv from 'dotenv';
dotenv.config();

// Imports and requires Pool (node-postgres)
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: 'localhost',
    port: 5432,
});

const connectToDb = async () => {
    try {
      await pool.connect();
      console.log('Connected to the database.');
    } catch (err) {
      console.error('Error connecting to database:', err);
      process.exit(1);
    }
  };

export default connectToDb;