import TextoCadastro from './TextoCadastro'
import FormularioCadastroPet from './FormularioCadastroPet'
import { Component } from 'react'

export default class Formulario extends Component {
    render() {
            
        return (
    
    <section className="container_cadastro">
        <TextoCadastro />
        <FormularioCadastroPet />
    </section>

        )
    }
}