import React from "react";
import Feldarbeiter from "./assets/Feldarbeiter.png";
import "./App.css"
import "./gegenwartsbezug.css"
import aufhaengen from "./assets/Aufhängen.png";
import Karte from "./assets/KARTE_schweiz_verwaltungsgliederung.png";



const Gegenwartsbezug = () => {
    return (
        <div>
        <img  src={Feldarbeiter} className="tbild"/>
            <p className="qubs">
                <a href="https://hls-dhs-dss.ch/articles/008927/2015-01-11/">Torf wurde zu Ziegeln geformt, von Frauen und Kindern aufgetürmt, in Körben transportiert und schließlich in Lagerhallen gebracht.
                </a>
            </p>

            <div className="babypad"></div>
        <div className="content">



            <h1>Gegenwartsbezug</h1>
            <p className="mpara">
                Die <a href="./erlebnisse.jsx">Erlebnisse</a> des Zweiten Weltkriegs beeinflussen bis heute das Bewusstsein und die Politik der Schweiz.
            </p>

        </div>
            <div>
                <div className="text-image-container">
                    <div className="pad"></div>
                    <p className="mpara">
                        Viele der damals eingeführten Maßnahmen haben auch nach dem Krieg Auswirkungen gehabt, insbesondere
                        in der Flüchtlingspolitik und der Verteidigungsstrategie des Landes.
                    </p>
                    <div className="image-container">
                        <a href="https://commons.wikimedia.org/wiki/File:KARTE_schweiz_verwaltungsgliederung.png" target="_blank" rel="noopener noreferrer">
                            <img src={Karte} alt="Schweiz zwischen den Achsenmächten" className="schweizerkarte" />
                        </a>
                        <p className="qubs">
                            Die Schweiz zwischen den Achsenmächten.
                        </p>
                    </div>

                    <div className="text-image-container-reverse">
                        <div className="image-container2">
                            <a href="https://hls-dhs-dss.ch/articles/008927/2015-01-11/" target="_blank" rel="noopener noreferrer">
                                <img src={aufhaengen} alt="Frauen hängen Wäsche von Soldaten auf" className="ration-image" />
                            </a>

                        </div>
                        <p className="mpara2">
                            Im Bezug zur Gegenwart wird gezeigt, dass die Erfahrungen des Kriegsalltag, wie zum Beispiel die <a href="./Rationierung" >Rationierung</a> und der <a href="./PlanWahlen" >Plan Wahlen</a>, eine sehr wichtige Lehre für den Umgang mit Krisensituationen und den Zusammenhalt der Bevölkerung war. Wegen diesen Erfahrungen wird bis heute noch das Bewusstsein für Nachhaltigkeit und die Schonung von Ressourcen beeinflusst. Mit begrenzten Ressourcen auszukommen und selbst Lösungen zu finden, ist bei heutigen Themen wie zum Beispiel Klimawandel und Energiekrisen relevant. Dazu zeigt sich, dass die Bevölkerung in Krisensituationen selbst Strategien entwickeln kann und wie diese dann über längere Zeit im Bewusstsein der Menschen präsent bleiben, wie zum Beispiel die Schonung der Ressourcen. Ebenfalls ein gegenwärtiges Thema, ist der Umgang mit Flüchtlingen. Während dem Krieg wurde sowohl durch Hilfe als auch durch Restriktionen mit den Flüchtlingen umgegangen. Im Vergleich zu damals wird mit den Flüchtlingen heute nach der Genfer Flüchtlingskonvention von 1951 verfahren.

                        </p>

                    </div>

                    <p className="qubs">Frauen unterstützten freiwillig Soldaten indem sie ihre Wäsche reinigten und ihnen Lebensmittelpakete schickten.
                    </p>

                </div>
            </div>


        </div>
    );
};

export default Gegenwartsbezug;
