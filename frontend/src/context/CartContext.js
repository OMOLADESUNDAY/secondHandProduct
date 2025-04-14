import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  total: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = action.payload;
      const exist = state.items.find((i) => i.id === item.id);
      const updatedItems = exist
        ? state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.items, { ...item, quantity: 1 }];
      const total = updatedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return { ...state, items: updatedItems, total };

    case 'REMOVE_FROM_CART':
      const filteredItems = state.items.filter((i) => i.id !== action.payload);
      const newTotal = filteredItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return { ...state, items: filteredItems, total: newTotal };

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);