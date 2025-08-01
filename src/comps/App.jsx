
import { Route, Routes } from "react-router-dom"

import Footer from "./Footer";
import Navbar from "./Navbar";
import NotFound from "../pages/boring/NotFound";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Weddings from "../pages/services/Weddings";
import Restaurants from "../pages/services/Restaurants";
import Maternity from "../pages/services/Maternity";
import Private from "../pages/services/Private";
import LogIn from "../pages/boring/LogIn";

import "../styles/App.css";

const App = () => {
    return (
        <div className="page-container">

            <div className="flower-pattern-border" />

            <Navbar />

            <div className="content">

                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/gallery" element={<Gallery />} />
                        
                        {/* Services */}
                        <Route path="/weddings" element={<Weddings />} />
                        <Route path="/restaurants" element={<Restaurants />} />
                        <Route path="/maternity" element={<Maternity />} />
                        <Route path="/private" element={<Private />} />

                        <Route path="/login" element={<LogIn />} />

                        <Route path="*" element={<NotFound />} />

                    </Routes>

            </div>

            <Footer />

            <div className="flower-pattern-border right" />


        </div>
    );
}

export default App;