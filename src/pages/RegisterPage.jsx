import React, { useState } from 'react';
import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const RegisterPage = () => {
    const { token, register } = useUserContext(); // Accedemos a register desde el contexto
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    if (token) return <Navigate to="/home" />; // Redirige si el usuario ya está autenticado

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword) {
            setMessage('Todos los campos son obligatorios.');
        } else if (password.length < 6) {
            setMessage('La contraseña debe tener al menos 6 caracteres.');
        } else if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden.');
        } else {
            try {
                // Intentar registrar usando el método register del contexto
                await register(email, password);
                setMessage('Registro exitoso.');
            } catch (error) {
                setMessage('Error en el registro.');
            }
        }
    };

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
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
                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegisterPage;
