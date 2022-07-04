import LogoBranco from "../Logo/LogoBranco"
import IconHome from "./IconHome.svg"
import IconEmail from "./IconEmail.svg"
import './Cabecalho.sass'

export default () =>

<section className="cabecalho">
    <LogoBranco className="logoCabecalho" />
    <img src={IconHome} className="IconHome"/>
    <img src={IconEmail} className="IconEmail"/>
</section>