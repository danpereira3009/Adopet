import React from "react";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import CampoCentral from "./CampoCentral"
import FormularioLogin from "./FormularioLogin"
import ImgPatas from "../../components/ImgPatas"
import './styles.sass'

export default () =>

<section className="login">
    <ImgPatas />
    <FormaVerdeSuperior />
    <FormaLateral /> 
    <CampoCentral />
    <FormularioLogin />
</section>