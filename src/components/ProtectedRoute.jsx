import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { token } = useUserContext();

    // Si no hay token, redirige a la página de login
    return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
