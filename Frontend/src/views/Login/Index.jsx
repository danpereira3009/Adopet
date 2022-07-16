import React from "react";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import CampoCentral from "./CampoCentral"
import FormularioLogin from "./FormularioLogin"
import './styles.sass'

export default () =>

<section className="login">
    <FormaVerdeSuperior />
    <FormaLateral /> 
    <CampoCentral />
    <FormularioLogin />
</section>