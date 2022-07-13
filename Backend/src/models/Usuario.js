import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        email: {type: String, required: true},
        telefone: {type: String},
        cidade: {type: String},
        senha: {type: String, required: true}
    },
    {
        versionKey: false
    }
);

const usuario = mongoose.model('usuario', usuarioSchema)

export default usuario