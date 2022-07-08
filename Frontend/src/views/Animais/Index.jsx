import React from "react";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import TabelaAnimais from "./TabelaAnimais"

import "./styles.sass"

export default () => 
    
<section className="containerAnimais">
        <FormaVerdeSuperior />
        <TabelaAnimais />
        <FormaLateral /> 
</section>