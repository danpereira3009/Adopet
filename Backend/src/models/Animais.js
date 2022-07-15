import mongoose from "mongoose";

const animalSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String},
        idade: {type: String},
        especie: {type: String},
        porte: {type: String},
        descricao: {type: String},
        cidade: {type: String},
        responsavel: {type: String},
        telefone: {type: String},
        img: {type: String}
    }
);

const animais = mongoose.model('animais', animalSchema)

export default animais