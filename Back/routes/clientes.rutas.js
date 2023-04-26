import { Router } from "express";
import {
  getLogin,
  postClientes,
  updateClientes,
  deleteClientes,
  getCliente,
  getClientes,
} from "../controllers/clientes.acciones.js";

const router = Router();

router.get("/", getLogin);
router.get("/admin", getClientes);
router.get("/admin/:id", getCliente);
router.post("/admin", postClientes);
router.patch("/admin/:id", updateClientes);
router.delete("/admin/:id", deleteClientes);

export default router;
