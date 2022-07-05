import React from "react";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import TabelaAnimais from "./TabelaAnimais"
import Footer from "../../components/Footer/Index"

import "./styles.sass"

export default () => 
    
<section className="containerAnimais">
        <Cabecalho />
        <FormaVerdeSuperior />
        <TabelaAnimais />
        <FormaLateral /> 
        <Footer /> 
</section>