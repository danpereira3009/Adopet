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
                                    <div className="divFotoPet">
                                        <img className="imgAnimal" src={animal.img} />
                                        {/* <Lixeira className="lixeira"/> */}
                                    </div>
                                    <div className="descricao">
                                        <h1>{animal.nome}</h1> 
                                        <h2>Idade: {animal.idade}</h2>
                                        <h2>Especie: {animal.especie}</h2>
                                        <h2>Porte: {animal.porte}</h2>
                                        <h2>Descrição: {animal.descricao}</h2>
                                        <h2>Cidade: {animal.cidade}</h2>
                                        
                                        <div className="container_responsavel">
                                            <img onClick={() => whatsApp(animal.telefone, animal.nome)} src={Balao} />
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