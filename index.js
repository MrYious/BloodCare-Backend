import addressRoutes from "./routes/addressRoute.js";
import cors from "cors";
import db from "./config/database.js";
import donorInfoRoutes from "./routes/donorInfoRoute.js";
import express from "express";
import userRoutes from "./routes/userRoute.js";
import validateRoutes from "./routes/validateRoute.js";

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
app.use('/validate', validateRoutes);
app.use('/donorinfo', donorInfoRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));