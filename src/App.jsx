import React from "react";
import "./App.css";
import titelBild from './assets/titelBild.png';
import PlanWahlen from './planwahlen.jsx';
import Rationierung from './rationierung.jsx';
import Erlebnisse from './erlebnisse.jsx';
import Gegenwartsbezug from './gegenwartsbezug.jsx';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import haus1 from "./assets/zerbomtesHaus1.png"
import karte from "./assets/lebensmittelkarte-1948-300x218.png";
import aufhaengen from "./assets/Aufhängen.png";
import ernte from "./assets/Ernte.png";
import Datenschutz from "./Datenschutz.jsx";


const App = () => {
    return (
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
                        <Route path="/Datenschutz" element={<Datenschutz />} />
                    </Routes>
                </main>

                {/* Footer */}
                <footer className="footer">
                    <p>&copy; Schweizer Alltag im 2. WK. Sandro Reller, Fabian Ott</p>
                    <p>Quellen:</p>
                    <a href="https://hls-dhs-dss.ch/de/articles/008927/2015-01-11/">Historisches Lexikon der Schweiz</a>
                    <p></p>
                    <a href="https://www.tagblatt.ch/ostschweiz/toggenburg/ganterschwil-erinnerungen-von-kindern-von-damals-wie-sich-der-krieg-in-den-alltag-frass-ld.2095969">St. Galler Tagblatt</a>
                    <p></p>
                    <a href="https://de.wikipedia.org/wiki/Plan_Wahlen">Wikipedia</a>
                    <p></p>
                    <Link to="/Datenschutz">Datenschutz</Link>


                    <p className="credits1">
                        Erstellt am: 28.11.2024
                    </p>

                    <p className="credits">

                        Letztes Update: 24.11.2024</p>
                    <div className="pad"></div>

                </footer>
            </div>
        </Router>
    );
};

const Home = () => (
    <div className="umschlag">
        <a href="https://www.tagblatt.ch/ostschweiz/toggenburg/ganterschwil-erinnerungen-von-kindern-von-damals-wie-sich-der-krieg-in-den-alltag-frass-ld.2095969" target="_blank" rel="noopener noreferrer">
            <img src={titelBild} alt="Titelbild" className="tbild" />
        </a>

        <p className="qubs">Soldat hält Ausschau nach Deutschland Bild: Walter Studer / Photopress-Archiv</p>
        <section className="content">
            <h1>Alltag in der Schweiz im zweiten Weltkrieg</h1>
            <div className="padzu"></div>
            <p className="mpara">
                Während dem zweiten Weltkrieg blieb die Schweiz neutral. Jedoch spürte auch die Bevölkerung in der Schweiz, dass sich der Alltag durch den Krieg stark verändert wurde. Wegen der Bedrohung durch den Krieg in den Nachbarländern wurden viele Vorbereitungen geführt. Zum Beispiel ist die Armee bereitgestellt worden und es wurde eine Verteidigungsstrategie in den Alpen erstellt. Dazu ist der Alltag durch Rationierungen und Einschränkungen bestimmt worden. Gleichzeitig wuchs der Zusammenhalt der Gesellschaft. Dies geschah, da die Bevölkerung Wege finden musste, um mit knappen Ressourcen auskommen zu können und die Herausforderungen des Kriegs zu bewältigen. Auch die Flüchtlingspolitik sorgte für politische Aufregung, da diese nicht richtig geregelt wurde. Die ganzen Erfahrungen hinterliessen auf längere Zeit Spuren im allgemeinen Bewusstsein der Bevölkerung.
            </p>

            <div className="pad"></div>
            <h3>Themen</h3>



            <div className="card-container">
                <Link to="/planwahlen" className="card-link">

                        <img src={ernte} alt="Plan Wahlen" className="card-img" />
                        <h4>Plan Wahlen</h4>
                        <p>Die Bevölkerung bereitete sich durch verschiedene Maßnahmen auf mögliche Bedrohungen vor.</p>

                </Link>
                <Link to="/rationierung" className="card-link">

                        <img src={karte} alt="Rationierung" className="card-img" />
                    <div className="cardpad"></div>
                        <h4>Rationierung</h4>
                        <p>Ressourcenknappheit führte zu einem System, das den gerechten Zugang zu Lebensmitteln garantierte.</p>

                </Link>
                <Link to="/erlebnisse" className="card-link">

                        <img src={haus1} alt="Erlebnisse" className="card-img" />
                        <h4>Erlebnisse</h4>
                        <p>Die Erlebnisse der Menschen spiegeln den Alltag und die Herausforderungen dieser Zeit wider.</p>

                </Link>
                <Link to="/gegenwartsbezug" className="card-link">

                        <img src={aufhaengen} alt="Gegenwartsbezug" className="card-img" />
                        <h4>Gegenwartsbezug</h4>
                        <p>Die Erfahrungen des Krieges beeinflussen bis heute das Bewusstsein und die Politik der Schweiz.</p>

                </Link>
            </div>


        </section>
    </div>
);

export default App;


