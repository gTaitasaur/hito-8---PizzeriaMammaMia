import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUserContext } from "../context/UserContext";
import './Navbar.css';

const Navbar = () => {
  const { totalAmount } = useCart();
  const { token, logout } = useUserContext();

  return (
    <nav className="navDiv">
      <div className="navLeft">
        <span>Pizzería Mamma Mía!</span>
        
        <Link to="/home">
          <button>🍕 Home</button>
        </Link>
        {token ? (
                <>
                    <Link to="/profile">
                      <button>🔓 Profile</button>
                    </Link>
                      <button onClick={logout}>🔒 Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">
                      <button>🔐 Login</button>
                    </Link>
                    <Link to="/register">
                      <button>🔐 Register</button>
                    </Link>
                </>
            )}
      </div>
      
      <div className="navRight">
        <Link to="/cart">
          <button className="total">🛒 Total: ${totalAmount.toFixed(2)}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;