import express from 'express';
import user from './routes/userRoute.js';
import auth from './routes/auth.route.js';
import news from './routes/news.route.js';

const app = express();
app.use(express.json());

app.use('/user', user);
app.use('/auth', auth);
app.use('/news', news);

export default app;