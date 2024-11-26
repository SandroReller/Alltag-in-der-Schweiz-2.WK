import React from "react";
import './PlanWahlen.css'
import "./App.css";
import Kartoffel from './assets/Kartoffelanbau_auf_dem_Klosterplatz.png';
import WahlenSchild from './assets/WahlenSchild.png';

const PlanWahlen = () => {
    return (
        <div className="contentpw">
                {/* Container für Titel und Bild */}
                <div className="image-title-containerpw">
                    {/* Bild */}
                    <img src={Kartoffel} alt="Kartoffelanbau" />

                    {/* Titel */}
                    <h1 className="h1pw">Plan Wahlen</h1>
                </div>
                <p className="qubs"><a href="https://de.wikipedia.org/wiki/Plan_Wahlen" >Anbau von Kartoffeln auf dem Klosterplatz in St. Gallen</a>
                </p>


            <div className="pad"></div>
            <div className="text-image-container">
                <p className="mpara">
                    Während des Zweiten Weltkriegs stellte die Schweiz den Plan Wahlen auf, damit die Leute in der Schweiz möglichst wenig importieren mussten. Dieser Plan, wurde nach dem Wirtschaftsminister Friedrich Traugott Wahlen benannt. Das Ziel des Plans war es, die Nahrungsmittelproduktion in der Schweiz zu steigern, damit die Schweiz bei einer Kriegsblockade unabhängig weiterleben konnte und keine Lebensmittelknappheit auftrat. Der Plan Wahlen wurde ab 1940 umgesetzt und bedeutete die Mobilisierung der Bevölkerung und aller verfügbaren Flächen für den Anbau von Lebensmitteln.
                        Das Hauptziel des Plans war die Umwandlung von Land in Ackerland. Land, das traditionell für Viehzucht oder gar nicht landwirtschaftlich genutzt wurde, sollte nun für den Anbau von Kartoffeln und Gemüse genutzt werden. Bürger wurden aufgefordert, nicht nur auf Feldern, sondern auch in ihren eigenen Gärten und öffentlichen Grünflächen Nahrungsmittel anzubauen. Dies wird auch Anbauschlacht genannt.
                        Der Alltag der Menschen änderte sich dadurch stark, viele Familien bewirtschafteten ihre eigenen Gärten oder bauten auf zusätzlichem Land an, während Schulen Lektionen zur Selbstversorgung anboten. Behörden verteilten Saatgut und gaben Anleitungen, wie man am effizientesten anbauen konnte. Durch den Plan Wahlen musste die Bevölkerung auch ihre Ernährung umstellen.
                        Der Plan wurde erfolgreich ausgeführt und war sehr wichtig für die Selbstverpflegung in der Schweiz. Während dem Krieg erreichte die Schweiz eine Selbstversorgungsquote von 60%.
                </p>
                <div className="image-container">
                    <a href="https://de.wikipedia.org/wiki/Plan_Wahlen" target="_blank" rel="noopener noreferrer">
                        <img src={WahlenSchild} alt="WahlenSchild" className="ration-image" />
                    </a>
                    <p className="qubs">Gedenktafel zur Anbauschlacht in Regensberg
                    </p>
                </div>
            </div>





        </div>
    );
};

export default PlanWahlen;