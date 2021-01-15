import React, { useContext} from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import { types } from '../../types/types';


export const Navbar = () => {

  const {user:{ userName }, dispatch}= useContext(AuthContext);
  const history = useHistory();

  const handleLogout = (e) => {
    dispatch({
      type: types.LOGOUT
    });

    history.replace("/login");
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
      <Link className="navbar-brand" style={{'paddingLeft':'2rem' }} to="/">
        Asociaciones
      </Link>
      <div className="navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/marvel"
          >
            Marvel
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/search"
          >
            Buscar
          </NavLink>
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto" style={{'paddingRight': '2rem'}}>
          <span className="nav-item nav-link text-light">
            {userName}
          </span>
          <button
            className="nav-item nav-link btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};