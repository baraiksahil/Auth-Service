import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connection from "./config/db.config.js";
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();

app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});
