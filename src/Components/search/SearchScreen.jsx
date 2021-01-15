import React, { useMemo } from "react";
import { HeroesCard } from "../heroes/HeroesCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../../selectores/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [{ searchText }, handleInputChange] = useForm({ searchText: q });
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();

    history.push(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Buscar Heroe</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h3> Buscar:</h3>
          <hr />
          <form onSubmit={handleSearch}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Buscar Hereo"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={searchText}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>
        <div className="col-7">
          <h3>Resultados</h3>
          <hr />
          {
            (q === '') && (
              <div className="alert alert-info">
                <h5>Buscar Heroe</h5>
              </div>
            ) 
          }
          {
            (q !== '' && heroesFiltered.length === 0) && (
              <div className="alert alert-danger">
                <h5>No existe el Heroe {q}</h5>
              </div>
            ) 
          }

          {heroesFiltered.map((heroe) => (
            <HeroesCard key={heroe.id} className="animate__animated animate__fadeIn" heroe={heroe} />
          ))}
        </div>
      </div>
    </>
  );
};
