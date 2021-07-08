import React, { useReducer, createContext } from "react";
import Reducer, {sumItems} from "./Reducer";
export const CartContext = createContext();

const cartFromStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const initialValue = { cartItems: cartFromStorage, ...sumItems(cartFromStorage) };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialValue);
  const addProduct = product => dispatch({ type: 'ADD_ITEM', payload: product })
  const increaseProduct = product => dispatch({ type: 'INCREASE', payload: product })
  const decreaseProduct = product => dispatch({ type: 'DECREASE', payload: product })
  const removeProduct = product => dispatch({ type: 'REMOVE_ITEM', payload: product })
  const clearCart = () => dispatch({type: 'CLEAR'})
  const ContextValue = {
    ...state,
    addProduct,
    increaseProduct,
    decreaseProduct,
    removeProduct,
    clearCart,
  };

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
