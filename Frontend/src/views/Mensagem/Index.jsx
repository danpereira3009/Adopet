import React from "react";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import CampoCentral from "./CampoCentral";
import './styles.sass'

export default () =>

<section className="containerMensagem">
    <FormaVerdeSuperior />
    <FormaLateral /> 
    <CampoCentral />
</section>