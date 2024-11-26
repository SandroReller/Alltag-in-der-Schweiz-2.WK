import React from "react";
import "./App.css";
import rationierung1 from './assets/lebensmittelkarte-1948-300x218.png';
import einkaufen from './assets/Einkaufen-1-294x300.png';



const Rationierung = () => {
    return (
        <div className="content">
            <h1>Rationierung</h1>
            <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Di_GD7JWS5k"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="text-image-container">
            <p className="mpara">
                Die Rationierung war im Alltagsleben der Schweizer sehr wichtig. Um die begrenzten Vorräte an Nahrungsmitteln und anderen lebenswichtigen Gütern zu verwalten, führte die Schweiz 1940 ein Rationierungssystem ein.  Das Ziel war es, eine gerechte Verteilung der knappen Ressourcen sicherzustellen, aus dem Grund, dass Importe durch den Krieg stark eingeschränkt waren und das Land auf ihre eigenen Produkte angewiesen war.
                Jeder Haushalt erhielt Karten für Lebensmittel, für den Zugang zu Produkten wie zum Beispiel Brot, Fleisch, Kaffee, usw. Diese Karten wurden benötigt, um im Laden einzukaufen. Die Menge war pro Person genau festgelegt. Dazu waren bestimmte Produkte teilweise gar nicht verfügbar.
            </p>
            <div className="image-container">
                <a href="https://blog.nationalmuseum.ch/2022/01/lebensmittelrationierung-zweiter-weltkrieg/" target="_blank" rel="noopener noreferrer">
                    <img src={rationierung1} alt="Lebensmittelkarte 1948" className="ration-image" />
                </a>
                <p className="qubs">Lebensmittelkarte für den Bezug von Mehl und Fett, Juli 1948.
                </p>
            </div>
        </div>
            <div className="text-image-container-reverse">
                <div className="image-container2">
                    <a href="https://blog.nationalmuseum.ch/2022/01/lebensmittelrationierung-zweiter-weltkrieg/" target="_blank" rel="noopener noreferrer">
                        <img src={einkaufen} alt="Einkaufen" className="ration-image" />
                    </a>

                </div>
                <p className="mpara2">
                    Die Menschen passten sich diesen Änderungen an, indem sie ihre Gewohnheiten umstellten und sparsamer lebten.
                    Kleidung und Treibstoff waren ebenfalls rationiert, wodurch der Alltag weiter verändert wurde. Viele Leute lernten, Kleidungsstücke selbst zu reparieren oder aus alten Stoffen neue Kleidung zu nähen. Auch Autos wurden eingeschränkt, um Benzin sparen zu können. Weshalb viele ihre Wege zu Fuss oder mit dem Fahrrad zurückgelegt haben.
                    Trotz den Einschränkungen war die Bevölkerung bereit sich anzupassen. Die Rationierung war für die Schweizer eine Herausforderung, aber auch eine Gelegenheit, als Gemeinschaft zu bestehen. Die Rationierung half dabei, die Bevölkerung während dem Krieg zu versorgen.
                </p>
            </div>
            <p className="qubsra">Eine Hausfrau kauft während des Zweiten Weltkriegs Lebensmittel, aufgenommen im Jahr 1943.
            </p>
        </div>
    );
};

export default Rationierung;