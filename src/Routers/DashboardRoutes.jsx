import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar } from '../Components/ui/NavBar';
import { HeroesScreen } from '../Components/heroes/HeroesScreen';
import { DCScreen } from '../Components/dc/DCScreen';
import { MarvelScreen } from '../Components/marvel/MarvelScreen';
import { SearchScreen } from '../Components/search/SearchScreen';

export const DashboardRoutes = ({ history }) => {
  return (
    <>
      <Navbar history={history} />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/heroe/:heroeId" component={ HeroesScreen } />
          <Route exact path="/dc" component={ DCScreen } />
          <Route exact path="/marvel" component={ MarvelScreen } />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
};
