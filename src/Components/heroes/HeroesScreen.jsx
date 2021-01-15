import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import getHeroesById from '../../selectores/getHeroesById';

export const HeroesScreen = ({ history }) => {

  const {heroeId} = useParams();

  const heroe = useMemo(() => getHeroesById(heroeId), [heroeId]);

  if(!heroe) {
    return <Redirect to="/" />
  }
  
  const {
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters,
  } = heroe;

  const handleInput = () => {
    if(history.length <= 2){
      history.push("/")
    } else {
      history.goBack();
    }
  }

  return (
    <>
      <h1>Heroe: {publisher}</h1>
      <hr />
      <div className="container mb-5" >
        <div className="row justify-content-start">
          <div className="col-sm-6 col-md-5 col-lg-6">
            <img style={{'width': '400px', 'height': '600px'}} src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} />
          </div>
          <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
            <div className="card-body">
              <h5 className="card-title fw-bold">{superhero}</h5>
              <p className="card-text">
                <span className="fw-bold">Alter ego:</span> {alter_ego}
              </p>
              <p className="card-text">
                <span className="fw-bold">Primera Aparicion:</span> {first_appearance}
              </p>
              <p className="card-text">
                <span className="fw-bold">Caracterizado por:</span> {characters}
              </p>
              <button className="btn btn-primary" onClick={handleInput}>
                Regresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
