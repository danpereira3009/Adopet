import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FotoPerfil from '../../assets/perfil.jpeg'
import Button from "../../components/Button.jsx"
import axios from 'axios'
import "./styles.sass"

export default () => {

        const [user, setUser] = useState("")
        useEffect(() => {
            axios.get('http://localhost:3000/usuario/62d30a35f79b0eda91e8d98f').then(response => {setUser(response.data)})
        })
        return (

                <div className="perfil">

                <h1 className="textoPerfil">Esse é o perfil que aparece para responsáveis ou ONGs <br/>que recebem sua mensagem.</h1>

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
                        <p>Daniel</p>
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
                        <Link to="/editarPerfil"><Button className="btnEditar" text="Editar" type="button"></Button></Link>
                    </div>
              </div>
        )
    }