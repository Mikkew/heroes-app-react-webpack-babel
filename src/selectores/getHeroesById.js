import heroes from '../data/heores';

const getHeroesById = ( id ) => {
  return heroes.find(heroe => heroe.id === id);
}

export default getHeroesById;
