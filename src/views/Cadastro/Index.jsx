import React from "react";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import Footer from "../../components/Footer/Index"
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import CampoCentral from "./CampoCentral";
import Formulario from "./Formulario";

import "./styles.sass"

export default () => 
    
    <section className="cadastro">
            <Cabecalho />
            <FormaVerdeSuperior />
            <FormaLateral /> 
            <CampoCentral />
            <Formulario />
            <Footer /> 
    </section>