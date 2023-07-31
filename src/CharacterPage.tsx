import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
}

export default function CharacterPage() {
    const params = useParams();
    const id = params.id;

    const [character, setCharacter] = useState<undefined|Character>();

    useEffect(() => {
        axios({
            url: "https://rickandmortyapi.com/api/character/" + id,
            method: "get"
        }).then(function (response) {
            setCharacter(response.data);
        });
    }, [id]);

    return character === undefined ? <p>Loading...</p> : (
        <div>
            <img src={character.image}/>
            <h1>{character.name}</h1>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
        </div>
    )
}