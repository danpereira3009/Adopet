import express from "express";
import AnimalController from "../controllers/animalController.js";

const router = express.Router()

router
    .get("/animais", AnimalController.listarAnimais)
    .post("/animais", AnimalController.cadastrarAnimal)
    .put("/animais/:id", AnimalController.atualizarAnimal)
    .delete("/animais/:id", AnimalController.deletarAnimal)

export default router;