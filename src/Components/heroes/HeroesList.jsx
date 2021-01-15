import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectores/getHeroesByPublisher';
import { HeroesCard } from './HeroesCard';

export const HeroesList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher) , [ publisher ]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
      {
        heroes.map(heroe => (
          <HeroesCard key={heroe.id} heroe={heroe} />
        ))
      }
    </div>
  )
}
