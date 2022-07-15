import axios from 'axios'

const ShowPassword = (id) => {
    var senha = document.getElementById(id);
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
    }
  }

export const whatsApp = (telefone, nome) => {
  window.open(`https://web.whatsapp.com/send?phone=${telefone}&text=Olá,%20estou%20interessado%20em%20adotar%20a%20${nome}`, "_blank")
}

export default ShowPassword