import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import injectContext from "./store/appContext.js";
import Home from "./pages/home.jsx";
import Influencer from "./pages/influencer";
import Empresa from "./pages/empresa.jsx";
import Login from "./pages/login";
import Register from "./pages/register";
import { Navbar } from "./component/navbar.jsx";
import { MisDatos } from "./component/misDatos.jsx";
import { MisListas } from "./component/misListas.jsx";
import { MisPropuestas } from "./component/misPropuestas.jsx";
import Formulario from "./pages/formulario.jsx";
import PropuestaRecibida from "./pages/PropuestaRecibida.jsx";
import Team from "./component/Team.jsx";



const Layout = () => {
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "")
    return <BackendURL />;

  return (
    <Router basename={basename}>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/influencer" element={<Home />} />
          <Route
            path="/influencer/single-influencer/:id"
            element={<Influencer />}
          />
          <Route path="/empresa" element={<Empresa />}>
            <Route path="/empresa/mis-datos" element={<MisDatos />} />
            <Route path="/empresa/mis-listas" element={<MisListas />} />
            <Route path="/empresa/mis-propuestas" element={<MisPropuestas />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-influencer" element={<Formulario />} />
          <Route path="/:lista_id/:propuesta_id" element={<PropuestaRecibida />} />
          <Route path="*" element={<h1>Not found!</h1>} />
          <Route path="/team" element={<Team />} />
          
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default injectContext(Layout);
