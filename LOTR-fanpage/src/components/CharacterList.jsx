import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        // Fetch agencies from an API or other source
        fetch('https://lotrapi.co/api/v1/characters')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch((error) => {
                console.error(error);
                navigate("/", { state: { error } });
              });
    }, []);

    return (
        <div className='container'>
            <h1>Heroes of Middle Earth</h1>
            {characters.length == 0 ?
                <div className="alert alert-warning py-4">
                    No characters found.<br />
                </div>
                : 
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>}
        </div>
    );
};

export default CharacterList;