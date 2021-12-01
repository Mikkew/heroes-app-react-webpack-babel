import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import AuthContext from '../auth/AuthContext';
import { LoginScreen } from '../Components/login/LoginScreen';
import { BASENAME } from '../utils/enviroments';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {

  const {user} = useContext(AuthContext);

  return (
    <Router basename={BASENAME}>
      <div>
        <Switch>
          <PublicRoute isAuthenticated={user.logged} path="/login" component={ LoginScreen }/>
          <PrivateRoute isAuthenticated={user.logged} path="/" component={ DashboardRoutes } />
        </Switch>
      </div>
    </Router>
  )
};

export default AppRouter;
