import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        email: {type: String, required: true},
        senha: {type: String, required: true},
        cidade: {type: String},
        telefone: {type: String},
        sobre: {type: String} 
    },
    {
        versionKey: false
    }
);

const usuario = mongoose.model('usuario', usuarioSchema)

export default usuario