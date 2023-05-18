import app from './src/index.js';
import { config } from 'dotenv';
import connectDB from './src/config/database.js';
config();

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log(`Listening port http://localhost:${port}`);
});