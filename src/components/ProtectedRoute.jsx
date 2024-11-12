import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { token } = useUserContext();

    return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
