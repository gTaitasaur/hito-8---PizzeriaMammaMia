import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { token } = useUserContext();
    console.log("ProtectedRoute - token:", token); // Verifica el valor de token
    return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
