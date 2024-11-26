import React from "react";
import "./App.css";
import Haus1 from './assets/zerbomtesHaus1.png';
import "./erlebnisse.css";
import PlanWahlen from "./planwahlen.jsx";
import Haus2 from './assets/zerbombtesHaus2.png';
import Rationierung from './rationierung.jsx';
import Gegenwartsbezug from './gegenwartsbezug.jsx';
import { Link } from "react-router-dom";
import rationierung1 from "./assets/lebensmittelkarte-1948-300x218.png";
import einkaufen from "./assets/Einkaufen-1-294x300.png";
import WahlenSchild from "./assets/WahlenSchild.png";

const Erlebnisse = () => {
    return (
        <div className="content">
        <div className="content-er">
            <h1>Erlebnisse</h1>
            <div className="image-container-er">
                <a href="https://www.srf.ch/radio-srf-1/radio-srf-1-zweiter-weltkrieg-tod-und-zerstoerung-auch-in-der-schweiz" target="_blank" rel="noopener noreferrer">
                    <img src={Haus1} alt="Haus1" className="ration-image" />
                </a>
                <p className="qubs">Bomben auf Zürich 1945:
                    Die linke Hälfte des Hauses mit der Nummer 184 an der Frohburgstrasse ist eingestürzt und wird von Luftschutzsoldaten durchsucht.

                </p>
            </div>
           <p>Während dem zweiten Weltkrieg musste sich die Schweizer Bevölkerung immer wieder anpassen. Obwohl die Schweiz im Krieg neutral blieb, spürte man die Bedrohung durch den Krieg. Die Verteidigung wurde stark ausgebaut, und viele junge Männer wurden ins Militär aufgerufen. Dies beeinflussten das tägliche Leben und die Arbeitswelt, vieler Leute und Familien. Die meisten Familien mussten mit weniger Arbeitskräften auskommen und auf die Heimkehr der Männer hoffen. Während die Frauen und älteren Leute die ganze Verantwortung über die Bauernhöfe und den Haushalt übernahmen.
               Lebensmittel, Kleidung und Brennstoffe wurden unter allen aufgeteilt, was die Gewohnheiten der Menschen veränderte. Die meisten Produkte waren begrenzt erhältlich, wodurch Ersatzprodukte notwendig waren. Zum Beispiel ersetzte Zichorienkaffee den echten Kaffee, und Fleisch wurde nur in kleinen Mengen verfügbar gemacht. Dazu lernten Familien, mit weniger auszukommen
               Der <a href="./PlanWahlen" >Plan Wahlen</a>, forderte die Bevölkerung auf, ungenutzte Flächen in Gärten und Äckern für den Anbau von Nahrungsmitteln zu nutzen. Dies brachte viele Familien und Nachbarschaften zusammen, die in ihren Gärten in Gemüse anbauten und gemeinsam versuchten, sich selbst zu versorgen. Die Schulen boten Kurse im Anbau an, sodass viele Menschen Kenntnisse in der Landwirtschaft erhielten.
               Die Leute lebten in ständiger Alarmbereitschaft. Die Möglichkeit eines Angriffs bestand jederzeit. Deshalb gehörten Luftschutzübungen und Verdunkelungsmassnahmen zum Alltag. Vor allem in den Grenzregionen lebten viele in Anspannung und hatten Pläne zur Evakuierung für den Fall eines Angriffs.
               Zusammengefasst lebte man im Alltag mit hoher Vorsicht. Doch trotz aller Einschränkungen kam die Bevölkerung näher zusammen. Sie waren bereit zur Zusammenarbeit, damit die Schweiz den Krieg überstand.
               Dazu nahm die Schweiz über 180.000 Flüchtlinge auf, obwohl die Flüchtlingspolitik auch umstritten war. Nebenbei handelte die Schweiz mit beiden Kriegsparteien, was sehr kritisch betrachtet wurde.
           </p>
            <div className="image-container-er">
                <a href="https://www.srf.ch/radio-srf-1/radio-srf-1-zweiter-weltkrieg-tod-und-zerstoerung-auch-in-der-schweiz" target="_blank" rel="noopener noreferrer">
                    <img src={Haus2} alt="Haus2" className="ration-image" />
                </a>
                <p className="qubs">Bomben auf Basel 1945:
                    Feuerwehrleute versuchen beim Güterbahnhof Basel in einem teilweise zerstörten Wohnhaus das Feuer zu löschen.
                </p>
            </div>
        </div>


        </div>
    );
};

export default Erlebnisse;