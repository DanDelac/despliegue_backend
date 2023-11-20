import { Router } from "express";
import {
  createCita,
  listCita,
  updateCita,
  deleteCita
} from "../Controladores/citas.controller.js";

const router = Router();


// Crear una cita
router.post("/createCita", createCita);
//Actualizar cita
router.patch("/updateCita/:IDCita", updateCita);
//Listar cita
router.get("/listCita", listCita);
// DELETE un empleado
router.delete("/deleteCita/:IDCita", deleteCita);



export default router;
