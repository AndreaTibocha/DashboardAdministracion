import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label>Email académico</label>
                  <input type="email" className="form-control" placeholder="estudiante@cesde.net" required />
                </div>
                <div className="mb-3">
                  <label>Contraseña</label>
                  <input type="password" className="form-control" placeholder="******" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Entrar al Dashboard
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
