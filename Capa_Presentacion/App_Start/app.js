import express from "express";
import morgan from "morgan";
import cors from "cors";

import employeesRoutes from "../Rutas/employees.routes.js";
import citasRoutes from "../Rutas/citas.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", employeesRoutes);
app.use("/citas", citasRoutes );

// Habilitar el middleware CORS
app.use(cors());

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
