import usuario from "../models/Usuario.js";

class UsuarioController {

    static listarUsuario = (req, res) => {
        usuario.find((err, usuario) => {
        res.status(200).json(usuario)
    })
}

    static cadastrarUsuario = (req, res) => {
        let user = new usuario(req.body)

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