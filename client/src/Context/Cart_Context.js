import { createContext, useContext, useReducer} from "react";
import reducer from '../Reducer/cartReducer'; 

const CartContext = createContext();

const initialState = {
    cart: [],
    total_item: "",
};


const CartProvider = ({ children }) => {
    const [state , dispatch] = useReducer(reducer , initialState);


    const addToCart = (name , price , image) => {
        dispatch({ type: "ADD_TO_CART" , payload: {name , price , image }});
    };

    const removeItem = (id) => {
        dispatch({type:"REMOVE_ITEM" , payload: id});
    };

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"});
    }

    return (
        <CartContext.Provider value={{ ...state , addToCart, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };