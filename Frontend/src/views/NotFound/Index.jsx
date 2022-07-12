import React from "react";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import NotFound from "./NotFound";
import "./styles.sass"

export default () => 
    
<section className="containerAnimais">
        <FormaVerdeSuperior />
        <NotFound />
        <FormaLateral /> 
</section>