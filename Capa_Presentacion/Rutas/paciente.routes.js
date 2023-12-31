import { Router } from "express";
import {
  createPaciente,
  listPaciente,
  updatePaciente,
  deletePaciente
} from "../Controladores/paciente.controller.js";

const router = Router();


// Crear paciente
router.post("/createPaciente", createPaciente);
//Actualizar paciente
router.patch("/updatePaciente/:id", updatePaciente);
//Listar paciente
router.get("/listPaciente/:ID", listPaciente);
// DELETE paciente
router.patch("/deletePaciente/:id",deletePaciente);



export default router;
