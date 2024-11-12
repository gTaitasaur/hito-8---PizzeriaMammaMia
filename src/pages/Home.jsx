import { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";
import '../components/Home.css'

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error("Error al cargar las pizzas:", error));
  }, []);

  return (
    <div className="PizzaDiv">
      {pizzas.map(pizza => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;