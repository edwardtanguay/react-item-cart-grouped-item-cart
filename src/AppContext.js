import { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const _cart = {
	items: []
};

export const AppProvider = ({ children }) => {
	const [cart, setCart] = useState(_cart);
	const [groupedItems, setGroupedItems] = useState([]);

	useEffect(() => {
		setGroupedItems([...cart.items]);
		console.log('updated grouped items');
	}, [cart]);

	const addToCart = (item) => {
		cart.items.push(item);
		setCart({ ...cart });
	}

	return (
		<AppContext.Provider value={{
			cart,
			addToCart,
			groupedItems
		}} >
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;