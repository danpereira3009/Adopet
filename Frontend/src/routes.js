import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./views/Home/Index";
import Cadastro from "./views/CadastrarUsuario/Index";
import Login from "./views/Login/Index";
import Animais from "./views/Animais/Index";
import Footer from "./components/Footer/Index"
import Cabecalho from "./components/Cabecalho/Index"
import Mensagem from "./views/Mensagem/Index"
import Perfil from "./views/Perfil/Index"
import Pet from "./views/CadastrarPet/Index"
import EditarPerfil from "./views/EditarPerfil/Index"
import NotFound from "./views/NotFound/Index"
import ImgPatas from "./components/ImgPatas"

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Cabecalho />
                <ImgPatas />
                    <Routes>
                        <Route path='/' element={<Home />} />
                            <Route path='/cadastro' element={<Cadastro />}/>
                            <Route path='/login' element={<Login />}/>
                            <Route path='/animais' element={<Animais />}/>
                            <Route path='/mensagem' element={<Mensagem />}/>
                            <Route path='/perfil' element={<Perfil />}/>
                            <Route path='/editarPerfil' element={<EditarPerfil />}/>
                            <Route path='/cadastrarPet' element={<Pet />}/>
                            <Route path='*' element={<NotFound />}/>
                        </Routes>
                    <Footer />
            </Router>
        </main>
    );
}