import addressRoutes from "./routes/addressRoute.js";
import cors from "cors";
import db from "./config/database.js";
import donorInfoRoutes from "./routes/donorInfoRoute.js";
import express from "express";
import mainRoutes from "./routes/mainRoute.js";
import requestRoutes from "./routes/requestRoute.js";
import userRoutes from "./routes/userRoute.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/address', addressRoutes);
app.use('/user', userRoutes);
app.use('/main', mainRoutes);
app.use('/donorinfo', donorInfoRoutes);
app.use('/request', requestRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));