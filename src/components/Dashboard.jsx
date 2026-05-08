import React, { useState, useEffect } from 'react';
import UsersTable from './UsersTable';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard({ onLogout }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadData = () => {
      const data = [
        { name: 'Enero', usuarios: 400, visitas: 2400 },
        { name: 'Febrero', usuarios: 300, visitas: 1398 },
        { name: 'Marzo', usuarios: 200, visitas: 9800 },
        { name: 'Abril', usuarios: 278, visitas: 3908 },
        { name: 'Mayo', usuarios: 189, visitas: 4800 },
      ];
      setChartData(data);
    };

    loadData();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Panel de Administración</span>
          <button className="btn btn-outline-light btn-sm" onClick={onLogout}>Cerrar Sesión</button>
        </div>
      </nav>

      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Usuarios Activos</h5>
                <p className="card-text display-4">1,245</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Nuevos Registros</h5>
                <p className="card-text display-4">384</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-warning mb-3">
              <div className="card-body">
                <h5 className="card-title">Visitas del Mes</h5>
                <p className="card-text display-4">15,302</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="card h-100">
              <div className="card-header">Estadísticas Mensuales</div>
              <div className="card-body">
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="usuarios" fill="#8884d8" name="Nuevos Usuarios" />
                      <Bar dataKey="visitas" fill="#82ca9d" name="Visitas" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card h-100">
              <div className="card-header">Resumen Rápido</div>
              <div className="card-body">
                <p>Bienvenido al panel de administración del sistema.</p>
                <p>Aquí puedes visualizar las métricas principales de la plataforma, así como gestionar la lista de usuarios registrados actualmente.</p>
                <p>El sistema se encuentra operando de forma normal.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <UsersTable />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
