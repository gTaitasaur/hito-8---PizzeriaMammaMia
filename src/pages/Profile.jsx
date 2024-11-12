import React, { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { email, getProfile, logout } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        // Obtener el perfil del usuario al cargar el componente
        getProfile();
    }, [getProfile]);

    const handleLogout = () => {
        logout();
        navigate("/login"); // Redirige al usuario a la página de inicio de sesión
    };

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            <p>Email: {email || "No disponible"}</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
};

export default Profile;
