import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./views/Home/Index";
import Galeria from "./views/Galeria/Index";
import Cadastro from "./views/Cadastro/Index";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/galeria' element={<Galeria />}/>
                <Route path='/cadastro' element={<Cadastro />}/>
            </Routes>
        </Router>
    );
}