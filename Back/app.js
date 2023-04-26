import express from "express";
import clientesRts from "./routes/clientes.rutas.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", clientesRts);

app.use((req, res, next) => {
  res.status(404).json({
    message: "¡Pagina no encontrada!",
  });
});

export default app;
