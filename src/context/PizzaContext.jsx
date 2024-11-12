import React, { createContext, useState, useEffect, useContext } from 'react';

const PizzaContext = createContext();

export const usePizzas = () => useContext(PizzaContext);

export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas")
          .then(response => response.json())
          .then(data => setPizzas(data))
          .catch(error => console.error("Error al cargar las pizzas:", error));
      }, []);

      return (
        <PizzaContext.Provider value={{ pizzas }}>
            {children}
        </PizzaContext.Provider>
    );
};