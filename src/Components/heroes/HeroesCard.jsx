import React from "react";
import { Link } from 'react-router-dom';

export const HeroesCard = ({ heroe }) => {
  const {
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
  } = heroe;
  
  return (
    <div className="col">
      <div className="card h-100">
        <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{superhero}</h5>
          <p className="card-text fw-light">{alter_ego}</p>
          {
            (alter_ego !== characters) && <p className="card-text">{first_appearance}</p>
          }
          <p className="card-text">{characters}</p>
        </div>
        <div className="card-footer">
          <Link to={`./heroe/${id}`}>Más...</Link>
        </div>
      </div>
    </div>
  );
};
