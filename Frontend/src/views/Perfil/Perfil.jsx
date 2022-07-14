import FotoPerfil from '../../assets/perfil.jpeg'
import { Component } from 'react'
import Button from "../../components/Button.jsx"
import "./styles.sass"

export default class Perfil extends Component {
    render() {
        return (

                <div className="perfil">

                    <h2>Perfil</h2>

                    <div>
                        <h1>Foto</h1>
                        <div className="boxFoto">
                            <img src={FotoPerfil} alt="imagem perfil" className="fotoPerfil" />
                            <h5>Clique na foto para editar</h5>
                        </div>
                    </div>

                    <div>
                        <h1>Nome</h1>
                        <p>Daniel Luiz Pereira</p>
                    </div>

                    <div>
                        <h1>Telefone</h1>
                        <p>2198461620</p>
                    </div>

                    <div>
                        <h1>Cidade</h1>
                        <p>Nova Iguaçu</p>
                    </div>

                    <div>
                        <h1>Sobre</h1>
                        <p>Breve descrição</p>
                    </div>

                    <div className='btn'>
                        <Button className="btnEditar" text="Editar" type=""></Button>
                    </div>
              </div>
        )
    }
}