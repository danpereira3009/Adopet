import mongoose from "mongoose";

const animalSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        idade: {type: String},
        porte: {type: String},
        descricao: {type: String},
        localizacao: {type: String},
        responsavel: {type: String},
        whats: {type: String, required: true},
        img: {type: String}
    }
);

const animais = mongoose.model('animais', animalSchema)

export default animais