import { createContext, useState, useContext } from "react";

export const AppContext = createContext();
export const CartContext = () => useContext(AppContext);
const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    return (
        <AppContext.Provider value={[items, setItems]}>
            { children }
        </AppContext.Provider>
    );
}

export default CartProvider