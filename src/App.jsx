import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route
              path="/profile"
              element={
                  <ProtectedRoute>
                      <Profile />
                  </ProtectedRoute>
              }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
