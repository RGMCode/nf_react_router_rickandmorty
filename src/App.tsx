// Import von erforderlichen Modulen und CSS-Datei
import './App.css'
import axios from "axios";
import { useEffect, useState } from "react";

// Definiert den Typ 'Character' für einen Charakter
type Character = {
    id: string;
    name: string;
    image: string;
    origin: {
        name: string;
    };
}

// Komponente 'AllCharacters', die die Charaktere aus der API abruft und anzeigt
function AllCharacters() {
    const [characters, setCharacters] = useState<undefined | Character[]>(undefined);

    // useEffect-Hook wird verwendet, um die API aufzurufen, sobald die Komponente montiert ist
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://rickandmortyapi.com/api/character',
        })
            .then(function (response) {
                console.log("GET / READ");
                console.log("Response status: ", response.status);
                console.log("Response data: ", response.data);
                setCharacters(response.data.results); // Setzt die abgerufenen Charakterdaten im State
            });}, []);
    // Zeigt entweder 'Loading Characters' an, wenn die Daten noch geladen werden, oder die Liste der Charaktere
    return (
        characters === undefined ? <div>Loading Characters</div> : (
            <ul className={"gallery"}>
                {characters.map(char =>
                    <li key={char.id} className={"character-card"}>
                        <h2>{char.name}</h2>
                        <img src={char.image} alt={"Avatar"} />
                        <h3>{char.origin.name}</h3>
                    </li>
                )}
            </ul>
        )
    );
}

// Komponente 'Ueberschrift', die eine Überschrift anzeigt
function Ueberschrift() {
    return (
        <div>
            <h1 className={"RuM"}>Rick and Morty + AXIOS APP</h1>
        </div>
    );
}

// Haupt-App-Komponente, die die anderen Komponenten rendert
function App() {
    return (
        <div>
            <Ueberschrift></Ueberschrift>
            <AllCharacters></AllCharacters>
        </div>
    );
}

export default App;