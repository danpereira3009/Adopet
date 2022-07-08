import LogoBranco from "../Logo/LogoBranco"
import IconHome from "./IconHome.svg"
import IconEmail from "./IconEmail.svg"
import { Link } from 'react-router-dom'
import './Index.sass'

export default () =>

<section className="cabecalho">
        <Link to="/"><LogoBranco className="logoCabecalho" /></Link>
        <Link to="/"><img src={IconHome} className="IconHome"/></Link>
        <img src={IconEmail} className="IconEmail" onClick={() => window.location = 'mailto:danpereira3009@gmail.com'}/>
</section> 