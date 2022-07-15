import { useState } from "react";
import Button from '../../components/Button'
import Foto from '../../assets/Joy.jpg'
import axios from 'axios'

export default () => {

        const [nome, setNome] = useState("")
        const [idade, setIdade] = useState("")
        const [porte, setPorte] = useState("")
        const [descricao, setDescricao] = useState("")
        const [cidade, setCidade] = useState("")
        const [responsavel, setResponsavel] = useState("")
        const [whats, setWhats] = useState("")

        function salvarPet() {

            const pet = {
                nome: nome,
                idade: idade,
                porte: porte,
                descricao: descricao,
                localizacao: cidade,
                responsavel: responsavel,
                whats: whats
        }

        axios.post('http://localhost:3000/animais', pet)
        
        .then(_ => {
            window.location.href = 'http://localhost:8000/animais';
        })

        .catch(error => {
            alert(error.response.data.message)
        })
    }
            
        return (
            
                <form action="" method="post" className="formulario">
                    
                    <div className="container">
                        <input type="text" id="nomePet" placeholder="Nome do Pet" onChange={(e) => {setNome(e.target.value)}} />
                        <input type="text" id="idade" placeholder="Idade" onChange={(e) => {setIdade(e.target.value)}}/>
                    </div>
                                        
                    <div className="container">
                        <input type="text" id="porte" placeholder="Porte" onChange={(e) => {setPorte(e.target.value)}} />
                        <input type="text" id="descricao" placeholder="Descricao curta" onChange={(e) => {setDescricao(e.target.value)}}/>
                    </div>
                                        
                    <div className="container">
                        <input type="text" id="localizacao" placeholder="Cidade e Estado" onChange={(e) => {setCidade(e.target.value)}}/>                                           
                        <input type="text" id="responsavel" placeholder="Nome do responsavel" onChange={(e) => {setResponsavel(e.target.value)}}/>
                     </div>
                       
                    <input type="text" id="whats" placeholder="Telefone ou what's app" onChange={(e) => {setWhats(e.target.value)}}/>                
                                        
                    <div className="container">
                        <Button type="button" className="btnCarregarImg" text="Carregar Imagem" />
                        <img className="imgPet" src={Foto} alt="Foto do Pet" />
                    </div>
                                        
                    <Button type="submit" text="Cadastrar Pet" className="btnCadastrar" onClick={salvarPet} />

                </form>
    )
}