import { Component } from "react";
import Balao from "../../assets/Balao.svg"
import "./styles.sass"
import Dunga from "../../assets/FotoAnimais/Dunga.svg"
import Felicia from "../../assets/FotoAnimais/Felicia.svg"
import Fiona from "../../assets/FotoAnimais/Fiona.svg"
import Lua from "../../assets/FotoAnimais/Lua.svg"
import Sid from "../../assets/FotoAnimais/Sid.svg"
import Amora from "../../assets/FotoAnimais/Amora.svg"
import Sirius from "../../assets/FotoAnimais/Sirius.svg"
import Yoda from "../../assets/FotoAnimais/Yoda.svg"
import Zelda from "../../assets/FotoAnimais/Zelda.svg"
import { whatsApp } from "../../utils/funcoes"

const animais = [{
    nome: "Dunga",
    idade: "2 anos",
    porte: "Pequeno",
    descricao: "Calmo e educado",
    localizacao: "Rio de Janeiro",
    responsavel: "Daniel",
    whats: "21984160620",
    img: Dunga
},{
    nome: "Dunga",
    idade: "2 anos",
    porte: "Pequeno",
    descricao: "Calmo e educado",
    localizacao: "Rio de Janeiro",
    responsavel: "",
    img: Felicia
},{
    nome: "Dunga",
    idade: "2 anos",
    porte: "Pequeno",
    descricao: "Calmo e educado",
    localizacao: "Rio de Janeiro",
    responsavel: "",
    img: Fiona
},{
    nome: "Dunga",
    idade: "2 anos",
    porte: "Pequeno",
    descricao: "Calmo e educado",
    localizacao: "Rio de Janeiro",
    responsavel: "",
    img: Lua
},{
    nome: "Dunga",
    idade: "2 anos",
    porte: "Pequeno",
    descricao: "Calmo e educado",
    localizacao: "Rio de Janeiro",
    responsavel: "",
    img: Sid
},{
    nome: "Dunga",
    idade: "2 anos",
    porte: "Pequeno",
    descricao: "Calmo e educado",
    localizacao: "Rio de Janeiro",
    responsavel: "",
    img: Amora
},{
    nome: "Dunga",
    idade: "2 anos",
    porte: "Pequeno",
    descricao: "Calmo e educado",
    localizacao: "Rio de Janeiro",
    responsavel: "",
    img: Sirius
},{
    nome: "Dunga",
    idade: "2 anos",
    porte: "Pequeno",
    descricao: "Calmo e educado",
    localizacao: "Rio de Janeiro",
    responsavel: "",
    img: Yoda
},
{
    nome: "Dunga",
    idade: "2 anos",
    porte: "Pequeno",
    descricao: "Calmo e educado",
    localizacao: "Rio de Janeiro",
    responsavel: "",
    img: Zelda
},
]

export default class Formulario extends Component {
    render() {
            
        return (

            <section>
                                
                <div className="sectionAnimais">
                    {
                        animais.map(animais => {
                                return <div className="divAnimal">
                                            <div>
                                                <img src={animais.img} />
                                            </div>
                                            <div>
                                                <h1>{animais.nome}</h1> 
                                                <h2>Idade: {animais.idade}</h2>
                                                <h2>Porte: {animais.porte}</h2>
                                                <h2>Descrição: {animais.descricao}</h2>
                                                <h2>Localização: {animais.localizacao}</h2>

                                                <div className="responsavel">
                                                    <img onClick={() => whatsApp(animais.whats, animais.nome)} src={Balao} />
                                                    <h2>Falar com responsável: {animais.responsavel}</h2>
                                                </div>
                                            </div>
                                        </div>
                            })
                    }
                    
                </div>
            </section>

        )
    }
}