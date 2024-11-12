import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useUserContext } from "../context/UserContext";

const Cart = () => {
    const { token } = useUserContext();
    const { cartItems, incrementQuantity, decrementQuantity, totalAmount } = useCart();
    const [message, setMessage] = useState('');

    const handleCheckout = async () => {
        if (!token) {
            setMessage("Debes iniciar sesión para realizar la compra.");
            return;
        }

        try {
            const response = await fetch("/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ cart: cartItems }),
            });

            if (response.ok) {
                setMessage("Compra realizada con éxito.");
            } else {
                setMessage("Error al realizar la compra.");
            }
        } catch (error) {
            setMessage("Error en el proceso de pago. Inténtalo de nuevo.");
        }
    };

    return (
        <div>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                cartItems.map(({ id, name, ingredients, price, quantity, img }) => (
                    <div key={id}>
                        <hr />
                        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                        <img src={img} alt={name} style={{ width: "300px" }} />
                        <p><b>Ingredientes: </b>{ingredients.join(', ')}</p>
                        <p><b>Precio: ${price}</b></p>
                        <p><b>Cantidad: {quantity}</b></p>
                        <button onClick={() => incrementQuantity(id)}>+</button>
                        <button onClick={() => decrementQuantity(id)}>-</button>
                    </div>
                ))
            )}
            <hr />
            <h2>Total: ${totalAmount.toFixed(2)}</h2>
            {token && <button onClick={handleCheckout}>Pagar</button>}
            {message && <p>{message}</p>}
        </div>
    );
};

export default Cart;
