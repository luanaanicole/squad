const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// Conectar ao MongoDB
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API rodando...");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});