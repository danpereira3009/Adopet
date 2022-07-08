import React from "react";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import FormaInferior from "../../components/FormaInferior/FormaInferior";
import CampoCentral from "./CampoCentral";
import "./styles.sass"

export default () => 
    
    <section className="home">
            <FormaVerdeSuperior />
            <FormaLateral /> 
            <CampoCentral />
            <FormaInferior />
    </section>
    
