import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

type Character = {
    id: number;
    name: string;
    image: string;
    origin: { name: string };
}

type CharacterCardProps = {
    character: Character
}

function CharacterCard(props: CharacterCardProps) {
    return (
        <li className="character-card">
            <h2>{props.character.name}</h2>
            <img src={props.character.image} alt={''} />
            <p>{props.character.origin.name}</p>
            <div className={"profil-details"}>
                <Link to={"/character/" + props.character.id}>Details</Link>
            </div>
        </li>
    )
}

export default function HomePage() {
    const [characters, setCharacters] = useState<undefined|Character[]>(undefined);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://rickandmortyapi.com/api/character'
        }).then(function (response) {
            console.log("Response status", response.status);
            console.log("Response body", response.data); // Response body
            setCharacters(response.data.results);
        });
    }, []);

    return (
        <>
            <h1>Rick and Morty App</h1>
            {characters === undefined ? <p>Loading...</p> : (
                <ul className="gallery">
                    {characters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </ul>
            )}
        </>
    )
}