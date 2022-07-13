import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const router = express.Router()

router
    .get("/usuario", UsuarioController.listarUsuario)
    .post("/usuario", UsuarioController.cadastrarUsuario)
    .put("/usuario/:id", UsuarioController.atualizarUsuario)
    .delete("/usuario/:id", UsuarioController.deletarUsuario)

export default router;