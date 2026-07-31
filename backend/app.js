const express = require("express");
const cors = require("cors");

const productoRoutes = require("./routes/productoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/productos", productoRoutes);

app.get("/", (req, res) => {
    res.send("API de Productos funcionando");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});