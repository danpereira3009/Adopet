import FormularioMensagem from "./FormularioMensagem"
import TextoMensagem from "./TextoMensagem";
import './styles.sass'

export default () =>

<section className="campoCentralMensagem">
    <TextoMensagem className="textoMensagem" />
    <FormularioMensagem className="formularioMensagem"/>
</section>