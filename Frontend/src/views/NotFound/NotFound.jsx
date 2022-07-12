import ImgNotFound from "../../assets/imgNotFound.jpg"
import { Button } from "../../components/Button"
import { useNavigate } from 'react-router-dom';
import "./styles.sass"

export default () => {
    const navigate = useNavigate();
    return (

<section>
        <Button text="< Voltar" className="btnVoltar" onClick={() => navigate(-1)} />

    <div className="notFound">
        <img src={ImgNotFound} alt="Página não encontrada" />
    </div>

</section>

    )
}