import mongoose from "mongoose";

const animalSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        idade: {type: String, required: true},
        porte: {type: String, required: true},
        descricao: {type: String},
        localizacao: {type: String, required: true},
        responsavel: {type: String, required: true},
        whats: {type: String, required: true},
        img: {type: String}
    }
);

const animais = mongoose.model('animais', animalSchema)

export default animais