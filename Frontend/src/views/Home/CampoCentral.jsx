import LogoBranco from "../../components/Logo/LogoBranco"
import { Button } from "../../components/Button"
import TextoBoasVindas from "./TextoBoasVindas";
import { Link } from 'react-router-dom'
import './styles.sass'

export default () =>

<div className="centro">
    <LogoBranco className="logoCentral" />
    <TextoBoasVindas />
    <Link to="/login"><Button text="Já tenho conta" className="btnHome" /></Link>
    <Link to="/cadastro"><Button text="Quero me cadastrar" className="btnHome"/></Link>
</div>