import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  const [race, setRace] = useState([]);

  useEffect(() => {
    fetch(`${character.race}`)
      .then((response) => response.json())
      .then((data) => setRace(data.name))
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <Link to={`/characters/${character.id}`} className="text-decoration-none">
      <div className="col">
        <div className="card h-100">
          <div>
            <img
              className="card-img-top"
              style={{ height: "250px", objectFit: "cover" }}
              src={`../src/assets/characterCardImgs/cc-id-${character.id}.jpg`}
              alt={`${character.name}`}
            />
          </div>
          <div className="card-body">
            <h2 className="card-title fs-4">{character.name}</h2>
            <h3 className="card-subtitle fs-5 mb-2 text-body-secondary">
              {race}
            </h3>
          </div>
          <div className="card-footer d-flex justify-content-end"></div>
        </div>
      </div>
    </Link>
  );
}
