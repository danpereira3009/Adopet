import usuario from "../models/Usuario.js";
import bcrypt from "bcrypt"
import mongoose from "mongoose";

class UsuarioController {

    static listarUsuario = (req, res) => {
        usuario.find((err, usuario) => {
        res.status(200).json(usuario)
    })
}

    static listarUsuarioPorId = (req, res) => {
        const id = req.params.id;

        usuario.findById(id, (err, usuario) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Usuário não encontrado`})
            } else if (usuario == null) {
                res.status(404).send({message: `Id ${id} não encontrado`})
            } else {
                res.status(200).send(usuario)
            }
        })
    }

    static login = async (req, res) => {
        
       const email = req.body.email;

        usuario.findOne({email: email}, (err, usuario) => {
        if(err) {
            res.status(400).send({message: `${err.message} - Usuário não encontrado`})
        } else if (usuario == null) {
            res.status(404).send({message: `Email ${email} não encontrado`})
        } else {
            
            bcrypt.compare(req.body.senha, usuario.senha).then(logado => {
                if (logado) {
                    res.status(200).send(usuario)
                } else {
                    res.status(404).send({message: `Senha inválida`})
                }
            })}
    })
}

    
    static cadastrarUsuario = async (req, res) => {
        
        let senhaCriptografada = await bcrypt.hash(req.body.senha, 2)

        let user = new usuario({...req.body, senha: senhaCriptografada } )

        user.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar o usuario`})
            } else {
                
                res.status(201).send(user.toJSON())
            }
        })
    }

    static atualizarUsuario = (req, res) => {
        const id = req.params.id;

        usuario.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: 'Usuario atualizado com sucesso'})
            } else {
                res.status(500).send({message: 'Erro ao atualizar usuario'})
            }
        })

    }

    static deletarUsuario = (req, res) => {
        const id = req.params.id
 
        usuario.findByIdAndDelete(id, (err, usuarioDeletado) => {
         if(err) {
             res.status(500).send({message: 'Usuario não removido'})
         } else if (!usuarioDeletado){
             res.status(404).send({message: 'Usuario não encontrado'})
         } else {
             res.status(200).send({message: `Usuario ${id} removido com sucesso`})
         }
        })
     }

}

export default UsuarioController