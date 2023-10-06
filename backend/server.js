import express from "express";
import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import cloudinary from "cloudinary";

dotenv.config();
cloudinary.config();
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("connected to database");
    })
    .catch((err) => {
        console.log(err.message);
    });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/upload", uploadRouter);

app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);

app.get("/api/keys/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});