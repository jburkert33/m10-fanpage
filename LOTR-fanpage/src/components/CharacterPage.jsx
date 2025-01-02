import React, { useState, useEffect } from 'react';

const CharacterPage = ({ id }) => {

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://lotrapi.co/api/v1/characters/${id}`)
            .then(response => response.json())
            .then(data => setCharacter(data))
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    if (!character) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='container'>
                <img 
                    src={`../src/assets/characterCardImgs/cc-id-${character.id}.jpg`} 
                    alt={character.name} 
                />
            </div>
            <h1>{character.name}</h1>
            <p><strong>Race:</strong> {character.race}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Birth:</strong> {character.date_of_birth}</p>
            <p><strong>Death:</strong> {character.date_of_death}</p>
            <p><strong>Height:</strong> {character.height}</p>
            <p><strong>Hair:</strong> {character.hair_color}</p>
            <p><strong>Realm:</strong> {character.realm}</p>
            <p><strong>Weapons:</strong> {character.weapons}</p>
            <ul><strong>Appears in:</strong> 
                {character.films.map(film => 
                    <li>{film}</li>
                )}
                {character.books.map(book =>
                    <li>{book}</li>
                )}
            </ul>
        </div>
    );
};

export default CharacterPage;