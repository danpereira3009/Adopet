import axios from 'axios'
import React, { useEffect, useState } from "react"
import Balao from "../../assets/Balao.svg"
import { whatsApp } from "../../utils/funcoes"
import "./styles.sass"


export default () => {
            
        const [animais, setAnimais] = useState([])
        useEffect(() => {
            axios.get('http://localhost:3000/animais').then(result => {setAnimais(result.data)})
        }, [])

        return (

            <section>
                                
                <div className="sectionAnimais">
                    {
                        animais.map(animal => {
                            
                                return ( 
                                 <div className="divAnimal">
                                            <div className="fotoAnimal">
                                                <img src={animal.img} />
                                            </div>
                                            <div className="descricao">
                                                <h1>{animal.nome}</h1> 
                                                <h2>Idade: {animal.idade}</h2>
                                                <h2>Porte: {animal.porte}</h2>
                                                <h2>Descrição: {animal.descricao}</h2>
                                                <h2>Localização: {animal.localizacao}</h2>

                                                <div className="responsavel">
                                                    <img onClick={() => whatsApp(animal.whats, animal.nome)} src={Balao} />
                                                    <h2>Falar com responsável: {animal.responsavel}</h2>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })
                    }
                    
                </div>
            </section>

        )
    }