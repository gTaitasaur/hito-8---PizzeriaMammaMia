import React from 'react';
import { useCart } from '../context/CartContext';
import { useUserContext } from "../context/UserContext";

const Cart = () => {
  const { token } = useUserContext();
  const { cartItems, incrementQuantity, decrementQuantity, totalAmount } = useCart();

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cartItems.map(({ id, name, ingredients, price, quantity, img }) => (
          <div key={id}>
            <hr />
            <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <img src={img} alt={name} style={{ width: "300px"}} />
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
      {token && <button>Pagar</button>}
    </div>
  );
};

export default Cart;