import React, { useState, useEffect } from 'react';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const initialUsers = [
        { id: 1, name: 'Ana García', email: 'ana@cesde.net', role: 'Administrador' },
        { id: 2, name: 'Carlos López', email: 'carlos@cesde.net', role: 'Usuario' },
        { id: 3, name: 'María Martínez', email: 'maria@cesde.net', role: 'Editor' },
        { id: 4, name: 'Juan Pérez', email: 'juan@cesde.net', role: 'Usuario' },
      ];
      setUsers(initialUsers);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleDelete = (idToDelete) => {
    const updatedUsers = users.filter(user => user.id !== idToDelete);
    setUsers(updatedUsers);
  };

  const handleEdit = (userName) => {
    alert(`Funcionalidad de edición para: ${userName} en desarrollo.`);
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando usuarios...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between align-items-center">
        <span>Gestión de Usuarios</span>
        <button className="btn btn-sm btn-success">Añadir Usuario</button>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-striped table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-3">No hay usuarios registrados.</td>
                </tr>
              ) : (
                users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleEdit(user.name)}
                      >
                        Editar
                      </button>
                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
