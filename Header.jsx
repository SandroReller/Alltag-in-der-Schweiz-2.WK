import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import React from "react";
import "./App.css";
import PlanWahlen from "./planwahlen.jsx";
import Rationierung from "./rationierung.jsx";
import Erlebnisse from "./erlebnisse.jsx";
import Gegenwartsbezug from "./gegenwartsbezug.jsx";

const Header = () => {
    return(
        <Router>
            <div className="app">
                {/* Header */}
                <header className="header">
                    <nav>
                        <ul>
                            <li><Link to="/">Startseite</Link></li>
                            <li><Link to="/planwahlen">Plan Wahlen</Link></li>
                            <li><Link to="/rationierung">Rationierung</Link></li>
                            <li><Link to="/erlebnisse">Erlebnisse</Link></li>
                            <li><Link to="/gegenwartsbezug">Gegenwartsbezug</Link></li>
                        </ul>
                    </nav>
                </header>

                {/* Main Section */}
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/planwahlen" element={<PlanWahlen />} />
                        <Route path="/rationierung" element={<Rationierung />} />
                        <Route path="/erlebnisse" element={<Erlebnisse />} />
                        <Route path="/gegenwartsbezug" element={<Gegenwartsbezug />} />
                    </Routes>
                </main>

                {/* Footer */}
                <footer className="footer">
                    <p>&copy; Schweizer Alltag im 2. WK. Sandro Reller, Fabian Ott</p>
                    <p>Quellen:</p>
                    <a href="https://hls-dhs-dss.ch/de/articles/008927/2015-01-11/">Historisches Lexikon der Schweiz</a>
                    <a href="https://www.tagblatt.ch/ostschweiz/toggenburg/ganterschwil-erinnerungen-von-kindern-von-damals-wie-sich-der-krieg-in-den-alltag-frass-ld.2095969">St. Galler Tagblatt</a>
                </footer>
            </div>
        </Router>

    );


}

export default Header;