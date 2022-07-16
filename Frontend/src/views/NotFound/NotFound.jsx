import ImgNotFound from "../../assets/imgNotFound.jpg"
import Button from "../../components/Button"
import { useNavigate } from 'react-router-dom';
import "./styles.sass"

export default () => {
    const navigate = useNavigate();
    return (

<section className="pageNotFound">
    <img className="notFound" src={ImgNotFound} alt="Página não encontrada" />
    <Button text="< Voltar" className="btnVoltar" onClick={() => navigate(-1)} />
</section>

    )
}