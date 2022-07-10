import animais from "../models/Animais.js";

class AnimalController {

    static listarAnimais = (req, res) => {
        animais.find((err, animais) => {
        res.status(200).json(animais)
    })
}

    static cadastrarAnimal = (req, res) => {
        let animal = new animais(req.body)

        animal.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar o animal`})
            } else {
                res.status(201).send(animal.toJSON())
            }
        })
    }

    static atualizarAnimal = (req, res) => {
        const id = req.params.id;

        animais.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: 'Animal atualizado com sucesso'})
            } else {
                res.status(500).send({message: 'Erro ao atualizar animal'})
            }
        })

    }

    static deletarAnimal = (req, res) => {
        const id = req.params.id
 
        animais.findByIdAndDelete(id, (err, animalDeletado) => {
         if(err) {
             res.status(500).send({message: 'animal não removido'})
         } else if (!animalDeletado){
             res.status(404).send({message: 'animal não encontrado'})
         } else {
             res.status(200).send({message: `animal ${id} removido com sucesso`})
         }
        })
     }

}

export default AnimalController