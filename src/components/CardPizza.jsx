import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();

  return (
    <div className="PizzaCard">
      <h3>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</h3>
      <img src={pizza.img} alt={pizza.name} />
      <p><b>Descripción: </b>{pizza.desc}</p>
      <p><b>Ingredientes: </b>{pizza.ingredients.join(', ')}</p>
      <p><b>Precio:</b> ${pizza.price}</p>
      <Link to={`/pizza/${pizza.id}`}>
          <button>Ver Detalles</button>
      </Link>
      <button onClick={() => addToCart(pizza)}>Añadir al Carrito</button>
    </div>
  );
};

export default CardPizza;
