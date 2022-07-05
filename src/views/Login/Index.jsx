import React from "react";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import Footer from "../../components/Footer/Index"
import CampoCentral from "./CampoCentral"
import FormularioLogin from "./FormularioLogin"
import ImgPatas from "./ImgPatas"
import './styles.sass'

export default () =>

<section className="login">
    <ImgPatas />
    <Cabecalho />
    <FormaVerdeSuperior />
    <FormaLateral /> 
    <CampoCentral />
    <FormularioLogin />
    <Footer /> 
</section>