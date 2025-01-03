import React, { useState, useEffect } from 'react';

const CharacterPage = ({ id }) => {

    const [character, setCharacter] = useState(null);
    const [race, setRace] = useState();

    useEffect(() => {
        async function fetchCharacter() {
            const response = await fetch(`https://lotrapi.co/api/v1/characters/${id}`);
            const data = await response.json();
            const race = await fetchRace(data);
            const realm = await fetchRealm(data);
            const films = await fetchFilms(data);
            const books = await fetchBooks(data);
            const updatedChar = { ...data, race: race, realm: realm, films: films, books: books };
            setCharacter(updatedChar);
        }
        async function fetchRace(charData) {
            const response = await fetch(`${charData.race}`);
            const data = await response.json();
            return data.name;
        }
        async function fetchRealm(charData) {
            const response = await fetch(`${charData.realm}`);
            const data = await response.json();
            return data.name;
        }
        async function fetchFilms(charData) {
            const films = [];
            for (const film of charData.films) {
                const response = await fetch(film);
                const data = await response.json();
                films.push(data.title);
            }
            return films;
        }
        async function fetchBooks(charData) {
            const books = [];
            for (const book of charData.books) {
                const response = await fetch(book);
                const data = await response.json();
                books.push(data.title);
            }
            return books;
        }
        // we only want to set character once... do we do these other fetches on other pages and grab the data from there?
        fetchCharacter();
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
            <div className='container content-align-center'>
                <div className='content-align-left'>
                    <h1>{character.name}</h1>
                    <p className='text-left'><strong>Race:</strong> {character.race}</p>
                    <p className='text-left'><strong>Gender:</strong> {character.gender}</p>
                    <p className='text-left'><strong>Birth:</strong> {character.date_of_birth}</p>
                    <p className='text-left'><strong>Death:</strong> {character.date_of_death}</p>
                    <p><strong>Height:</strong> {character.height}</p>
                    <p><strong>Hair:</strong> {character.hair_color}</p>
                    <p><strong>Realm:</strong> {character.realm}</p>
                    <p><strong>Weapons:</strong> {character.weapons ? character.weapons.toString() : "none"}</p>
                    <ul><strong>Appears in:</strong>
                        <ul className='list-unstyled'>Films: 
                            {character.films ? character.films.map(film => 
                                <li>{film}</li>
                            ) : <li>None</li>}
                        </ul>
                        <ul className='list-unstyled'>Books:
                            {character.books ? character.books.map(book =>
                                <li>{book}</li>
                            ) : <li>None</li>}
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CharacterPage;