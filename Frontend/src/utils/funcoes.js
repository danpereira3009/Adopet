const ShowPassword = (id) => {
    var senha = document.getElementById(id);
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
    }
  }

export const whatsApp = (telefone, nome) => {
  window.open(`https://web.whatsapp.com/send?phone=${telefone}&text=Converse%20comigo%20sobre%20o%20${nome}`, "_blank")
}

export default ShowPassword