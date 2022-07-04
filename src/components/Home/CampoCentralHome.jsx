import LogoBranco from "../Logo/LogoBranco"
import { Button } from "./Button"
import TextoBoasVindas from "./TextoBoasVindas";
import './CampoCentralHome.sass'

export default () =>

<div className="centro">
    <LogoBranco className="logoCentral" />
    <TextoBoasVindas />
    <Button text="Já tenho conta"/>
    <Button text="Quero me cadastrar"/>
</div>