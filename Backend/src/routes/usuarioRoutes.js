import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const router = express.Router()

router
    .post("/usuario/login", UsuarioController.login)
    .get("/usuario", UsuarioController.listarUsuario)
    .get("/usuario/:id", UsuarioController.listarUsuarioPorId)
    .post("/usuario", UsuarioController.cadastrarUsuario)
    .put("/usuario/:id", UsuarioController.atualizarUsuario)
    .delete("/usuario/:id", UsuarioController.deletarUsuario)

export default router;