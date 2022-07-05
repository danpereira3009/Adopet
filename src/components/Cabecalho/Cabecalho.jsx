import LogoBranco from "../Logo/LogoBranco"
import IconHome from "./IconHome.svg"
import IconEmail from "./IconEmail.svg"
import { Link } from 'react-router-dom'
import './Cabecalho.sass'

export default () =>

<section className="cabecalho">
    <LogoBranco className="logoCabecalho" />
    <Link to="/"><img src={IconHome} className="IconHome"/></Link>
    <img src={IconEmail} className="IconEmail" onClick={() => window.location = 'mailto:danpereira3009@gmail.com'}/>
</section>