import React from "react";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import CampoCentral from "./CampoCentral";
import FormularioCadastro from "./FormularioCadastro";
import "./styles.sass"

export default () => 
    
<section className="cadastro">
    <FormaVerdeSuperior />
    <FormaLateral /> 
    <CampoCentral />
    <FormularioCadastro />
</section>