import { Component } from "react";
import Button from '../../components/Button'
import Foto from '../../assets/Joy.jpg'

export default class Formulario extends Component {
    render() {
            
        return (
            
                <form action="" method="post" className="formulario">
                    
                    <div className="container">
                        <input type="text" id="nomePet" required placeholder="Nome do Pet" />
                        <input type="text" id="idade" required placeholder="Idade" />
                    </div>
                                        
                    <div className="container">
                        <input type="text" id="porte" required placeholder="Porte" />
                        <input type="text" id="descricao" required placeholder="Descricao curta" />
                    </div>
                                        
                    <div className="container">
                        <input type="text" id="localizacao" required placeholder="Cidade e Estado" />                                           
                        <input type="text" id="responsavel" required placeholder="Nome do responsavel" />
                     </div>
                       
                    <input type="text" id="whats" required placeholder="Telefone ou what's app" />                
                                        
                    <div className="container">
                        <Button type="submit" className="btnCarregarImg" text="Carregar Imagem" />
                        <img className="imgPet" src={Foto} alt="Foto do Pet" />
                    </div>
                                        
                    <Button text="Cadastrar Pet" className="btnCadastrar">Cadastrar</Button>

                </form>
        )
    }
}