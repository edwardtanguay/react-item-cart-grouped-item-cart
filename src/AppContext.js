import { createContext, useState } from 'react';

const AppContext = createContext();

const _cart = {
	items: []
};

export const AppProvider = ({ children }) => {
	const [cart, setCart] = useState(_cart);

	const addToCart = (item) => {
		cart.items.push(item);
		setCart({ ...cart });
	}

	return (
		<AppContext.Provider value={{
			cart,
			setCart,
			addToCart
		}} >
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;