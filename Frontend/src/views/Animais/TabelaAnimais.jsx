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
    nome: "Felicia",
    idade: "1 ano e meio",
    porte: "Pequeno",
    descricao: "Esperta",
    localizacao: "Rio de Janeiro",
    responsavel: "Isis",
    img: Felicia
},{
    nome: "Fiona",
    idade: "8 anos",
    porte: "Pequeno",
    descricao: "Calmo e educado",
    localizacao: "Rio de Janeiro",
    responsavel: "Leticia",
    img: Fiona
},{
    nome: "Lua",
    idade: "8 meses",
    porte: "Médio",
    descricao: "Calmo e educado",
    localizacao: "Rio de Janeiro",
    responsavel: "Juliana",
    img: Lua
},{
    nome: "Sid",
    idade: "2 anos",
    porte: "Pequeno",
    descricao: "Calmo e educado",
    localizacao: "Rio de Janeiro",
    responsavel: "Alan",
    img: Sid
},{
    nome: "Sirius",
    idade: "5 anos",
    porte: "Grande",
    descricao: "Calma",
    localizacao: "Minas Gerais",
    responsavel: "Pereira",
    img: Amora
},{
    nome: "Amora",
    idade: "12 anos",
    porte: "Pequeno",
    descricao: "Cansada",
    localizacao: "Rio de Janeiro",
    responsavel: "Tereza",
    img: Sirius
},{
    nome: "Yoda",
    idade: "1 ano",
    porte: "Médio",
    descricao: "Agitada",
    localizacao: "Bahia",
    responsavel: "Pilar",
    img: Yoda
},
{
    nome: "Zelda",
    idade: "6 meses",
    porte: "Pequeno",
    descricao: "inteligente",
    localizacao: "São Paulo",
    responsavel: "Renan",
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
                                            <div className="fotoAnimal">
                                                <img src={animais.img} />
                                            </div>
                                            <div className="descricao">
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