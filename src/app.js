import express from 'express';
import "dotenv/config";
import './config/db.js';
import user_router from './routes/user_route.js';
import post_router from './routes/post_route.js';
const app = express();

app.use(express.json());

app.use('/user', user_router);
app.use('/post', post_router);

app.listen(process.env.API_PORT, () => {
    console.log(`Server running at port ${process.env.API_PORT}`);
});