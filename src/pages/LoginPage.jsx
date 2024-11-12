import React, { useState } from 'react';
import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
    const { token, login } = useUserContext(); // Accedemos a login desde el contexto
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // Redirige a /home si el usuario ya está autenticado
    if (token) return <Navigate to="/home" />;

    const loginSubmit = async (e) => {
        e.preventDefault();
        setMessage("");  // Limpia cualquier mensaje previo

        if (!email || !password) {
            setMessage('Todos los campos son obligatorios.');
        } else if (password.length < 6) {
            setMessage('La contraseña debe tener al menos 6 caracteres.');
        } else {
            // Intentar iniciar sesión usando el método login del contexto
            try {
                await login(email, password);
                setMessage('Inicio de sesión exitoso.');
            } catch (error) {
                setMessage('Error en el inicio de sesión.');
            }
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={loginSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginPage;
