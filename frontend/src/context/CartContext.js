// import React, { createContext, useReducer, useContext } from 'react';

// const CartContext = createContext();

// const initialState = {
//   items: [],
//   total: 0,
// };

// function cartReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const item = action.payload;
//       const exist = state.items.find((i) => i.id === item.id);
//       const updatedItems = exist
//         ? state.items.map((i) =>
//             i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//           )
//         : [...state.items, { ...item, quantity: 1 }];
//       const total = updatedItems.reduce(
//         (acc, item) => acc + item.price * item.quantity,
//         0
//       );
//       return { ...state, items: updatedItems, total };

//     case 'REMOVE_FROM_CART':
//       const filteredItems = state.items.filter((i) => i.id !== action.payload);
//       const newTotal = filteredItems.reduce(
//         (acc, item) => acc + item.price * item.quantity,
//         0
//       );
//       return { ...state, items: filteredItems, total: newTotal };

//     default:
//       return state;
//   }
// }

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   const addToCart = (product) => {
//     dispatch({ type: 'ADD_TO_CART', payload: product });
//   };

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: id });
//   };

//   return (
//     <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);



import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const getInitialState = () => {
  const localData = localStorage.getItem('cart');
  try {
    const parsed = localData ? JSON.parse(localData) : null;

    // ✅ check if parsed is a valid object with an array `items` and number `total`
    if (
      parsed &&
      typeof parsed === 'object' &&
      Array.isArray(parsed.items) &&
      typeof parsed.total === 'number'
    ) {
      return parsed;
    }
  } catch (error) {
    console.error('Error parsing localStorage cart data:', error);
  }

  // fallback if anything fails
  return { items: [], total: 0 };
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
  return {
    ...state,
    items: state.items.map((item) =>
      item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
    ),
    total: state.items.reduce((acc, item) =>
      item.id === action.payload
        ? acc + item.price * (item.quantity + 1)
        : acc + item.price * item.quantity
    , 0)
  };

case 'DECREASE_QUANTITY':
  return {
    ...state,
    items: state.items.map((item) =>
      item.id === action.payload && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ),
    total: state.items.reduce((acc, item) =>
      item.id === action.payload && item.quantity > 1
        ? acc + item.price * (item.quantity - 1)
        : acc + item.price * item.quantity
    , 0)
  };
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
  const [state, dispatch] = useReducer(cartReducer,undefined, getInitialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };
  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };
  
  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };
  return (
    <CartContext.Provider value={{  ...state,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);