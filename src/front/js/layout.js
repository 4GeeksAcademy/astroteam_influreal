import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams, } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import Home from "./pages/home";
import Influencer from "./pages/influencer";
import Empresa from "./pages/empresa.jsx";
import Login from "./pages/login";
import Register from "./pages/register";
import { Navbar } from "./component/navbar.jsx";
import { MisDatos } from "./component/misDatos.jsx";
import { MisListas } from "./component/misListas.jsx";
import { MisPropuestas } from "./component/misPropuestas.jsx";

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
          <Route path="/influencer/" element={<Home />} />
          <Route path="/influencer/:influencerId" element={<Influencer />} />
          <Route path="/empresa" element={<Empresa />} >
            <Route path="/empresa/mis-datos" element={<MisDatos />} />
            <Route path="/empresa/mis-listas" element={<MisListas />} />
            <Route path="/empresa/mis-propuestas" element={<MisPropuestas />} />

          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default Layout;
