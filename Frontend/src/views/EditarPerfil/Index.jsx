import React from "react";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import EditarPerfil from "./EditarPerfil";
import './styles.sass'

export default () =>

<section className="containerPerfil">
    <EditarPerfil />
    <FormaVerdeSuperior />
    <FormaLateral /> 
</section>