import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <Link to="/home">Volver a la página principal</Link>
    </div>
  );
}

export default NotFound;
