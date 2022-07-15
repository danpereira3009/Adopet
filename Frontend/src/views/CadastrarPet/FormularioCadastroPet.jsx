import { useState } from "react";
import Button from '../../components/Button'
import axios from 'axios'

export default () => {

        const [nome, setNome] = useState("")
        const [idade, setIdade] = useState("")
        const [porte, setPorte] = useState("")
        const [especie, setEspecie] = useState("")
        const [descricao, setDescricao] = useState("")
        const [cidade, setCidade] = useState("")
        const [responsavel, setResponsavel] = useState("")
        const [telefone, setTelefone] = useState("")

        function salvarPet() {

            const pet = {
                nome: nome,
                idade: idade,
                especie: especie,
                porte: porte,
                descricao: descricao,
                cidade: cidade,
                responsavel: responsavel,
                telefone: telefone
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
            
            <div>
                <form action="" method="post" className="containerCadastrarPet">

                        <div className="container_add_foto">
                            <div class="inputArquivos">
                                <input class="inputHidden" type="file" id="carregarDocs"/>
                                <label class="labelInput" for="carregarDocs">
                                    <p>Clique aqui para inserir a foto do seu pet</p>
                                </label>
                            </div>
                        </div>
                        <div className="containerInputs1">
                            <input type="text" className="inputCadastrarPet" id="nomePet" placeholder="Nome do Pet" onChange={(e) => {setNome(e.target.value)}} />
                            <input type="text" className="inputCadastrarPet" id="idade" placeholder="Idade" onChange={(e) => {setIdade(e.target.value)}}/>
                            <input type="text" className="inputCadastrarPet" id="especie" placeholder="Especie" onChange={(e) => {setEspecie(e.target.value)}} />
                            <input type="text" className="inputCadastrarPet" id="porte" placeholder="Porte" onChange={(e) => {setPorte(e.target.value)}} />
                            <input type="text" className="inputCadastrarPet" id="descricao" placeholder="Descricao curta" maxlength="10" onChange={(e) => {setDescricao(e.target.value)}}/>
                            <input type="text" className="inputCadastrarPet" id="localizacao" placeholder="Cidade e Estado" onChange={(e) => {setCidade(e.target.value)}}/>   
                            <input type="text" className="inputCadastrarPet" id="responsavel" placeholder="Nome do responsavel" onChange={(e) => {setResponsavel(e.target.value)}}/>
                            <input type="text" className="inputCadastrarPet" id="whats" placeholder="Telefone ou what's app" onChange={(e) => {setTelefone(e.target.value)}}/>   
                        </div>
                   
                </form>
                        <Button type="button" text="Cadastrar Pet" className="btnCadastrarPet" onClick={salvarPet} />
            </div>
    )
}