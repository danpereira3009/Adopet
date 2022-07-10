import LogoBranco from "../../components/Logo/LogoBranco"
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom'
import './styles.sass'

export default () =>

<div className="centro">
    <LogoBranco className="logoCentral" />
        <h1 className="textoCentro1">Boas-Vindas</h1>
        <p className="textoCentro2">Adotar pode mudar uma vida. Que tal buscar seu <br/>novo melhor amigo hoje? Vem com a gente!</p>
    <Link to="/login"><Button text="Já tenho conta" className="btnHome" /></Link>
    <Link to="/cadastro"><Button text="Quero me cadastrar" className="btnHome"/></Link>
</div>