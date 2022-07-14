import React from "react";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import CampoCentral from "./CampoCentral";
import "./styles.sass"
import { Component } from 'react'

export default class Formulario extends Component {
    render() {
            
        return (
    
    <section className="cadastro">
        <FormaVerdeSuperior />
        <FormaLateral /> 
        <CampoCentral />
    </section>

        )
    }
}