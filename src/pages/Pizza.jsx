import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        fetch(`/api/pizzas/${id}`)
            .then(response => response.json())
            .then(data => setPizza(data))
            .catch(error => console.error("Error fetching pizza:", error));
    }, [id]);

    return (
        <div>
            {pizza ? (
                <div>
                    <h1>{pizza.name}</h1>
                    <p>{pizza.description}</p>
                    <p>Precio: ${pizza.price}</p>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default Pizza;
