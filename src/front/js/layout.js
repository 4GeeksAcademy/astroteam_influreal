import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop';
import { BackendURL } from './component/backendURL';

import Home from './pages/home';
import Influencer from './pages/influencer';
import Empresa from './pages/empresa.jsx';
import Login from './pages/login';
import Register from './pages/register';
import { Navbar } from './component/navbar.jsx';

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <Router basename={basename}>
            <ScrollToTop>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/influencer" element={<Influencer />} />
                    <Route path="/empresa" element={<Empresa />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                </Routes>
            </ScrollToTop>
        </Router>
    );
};

export default Layout;
