import React from "react";
import FormaVerdeSuperiorHome from "../../components/FormaSuperiorHome/FormaVerdeSuperiorHome";
import FormaLateral from "../../components/FormaLateralHome/FormaLateral";
import FormaInferior from "../../components/FormaInferiorHome/FormaInferior";
import Footer from "../../components/Footer/Index"
import CampoCentralHome from "../../components/Home/CampoCentralHome";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import "./Index.sass"

export default () => 
    
    <section className="home">
            <Cabecalho />
            <FormaVerdeSuperiorHome />
            <FormaLateral /> 
            <CampoCentralHome />
            <FormaInferior />
            <Footer /> 
    </section>
    
