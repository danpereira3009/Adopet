import React from "react";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import './styles.sass'
import CampoCentral from "./CampoCentral";

export default () =>

<section className="containerMensagem">
    <FormaVerdeSuperior />
    <FormaLateral /> 
    <CampoCentral />
</section>