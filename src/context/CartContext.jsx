import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Agrga porducto al carrito
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Aumenta la cantidad de productos
    const incrementQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Quita cantidad de productos
    const decrementQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                    : item
            ).filter(item => item.quantity > 0)
        );
    };

    // Vaciar el carrrito
    const clearCart = () => {
        setCartItems([]);
    };

    // Valor total de la compra
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                incrementQuantity,
                decrementQuantity,
                clearCart,
                totalAmount
            }}
        >
            {children}
        </CartContext.Provider>
    );
};