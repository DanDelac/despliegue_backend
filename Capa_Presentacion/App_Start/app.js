import express from "express";
import morgan from "morgan";
import cors from "cors";

import employeesRoutes from "../Rutas/employees.routes.js";
import citasRoutes from "../Rutas/citas.routes.js";
import tratamiento from "../Rutas/tratamiento.routes.js";

const app = express();

const corsOptions = {
  origin: '*', // o '*' para permitir desde cualquier origen
  methods: 'GET,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};

// Middlewares
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", employeesRoutes);
app.use("/citas", citasRoutes );
app.use("/tratamiento", tratamiento );

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
