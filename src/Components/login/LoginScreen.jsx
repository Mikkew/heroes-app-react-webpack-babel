import React, { useContext } from 'react';
import AuthContext from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext)
  const [ formValue, handleInputChange ] = useForm({
    userName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const lastPath = localStorage.getItem('lastPath');

  

    dispatch({
      type: types.LOGIN,
      payload: formValue
    })


  //  history.push("/");
    history.replace(lastPath);
 }

  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            placeholder="Ingresa el usuario"
            value={formValue.userName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={formValue.password}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-success">Login</button>
      </form>

    </div>
  )
}
