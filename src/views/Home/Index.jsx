import React from "react";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import FormaInferior from "../../components/FormaInferior/FormaInferior";
import CampoCentral from "./CampoCentral";
import Footer from "../../components/Footer/Index"
import "./styles.sass"

export default () => 
    
    <section className="home">
            <Cabecalho />
            <FormaVerdeSuperior />
            <FormaLateral /> 
            <CampoCentral />
            <FormaInferior />
            <Footer /> 
    </section>
    
