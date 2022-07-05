import LogoBranco from "../../components/Logo/LogoBranco"
import { Button } from "../../components/Button"
import TextoBoasVindas from "./TextoBoasVindas";
import { Link } from 'react-router-dom'
import './styles.sass'

export default () =>

<div className="centro">
    <LogoBranco className="logoCentral" />
    <TextoBoasVindas />
    <Button text="Já tenho conta"/>
    <Link to="/cadastro"><Button text="Quero me cadastrar"/></Link>
</div>