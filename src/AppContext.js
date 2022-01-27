import { createContext, useState, useEffect } from 'react';
import items from './data/items.json'; 

const AppContext = createContext();

const _cart = {
	items: []
};

export const AppProvider = ({ children }) => {
	const [cart, setCart] = useState(_cart);
	const [groupedItems, setGroupedItems] = useState([]);

	useEffect(() => {
		const obj = {};
		const _groupedItems = [];
		cart.items.forEach(item => {
			if (!obj[item.id]) {
				obj[item.id] = 1;
			} else {
				obj[item.id]++;
			}
		});
		const ids = Object.keys(obj);
		ids.forEach(id => {
			const groupedItem = {};
			groupedItem.id = id;
			groupedItem.name = items.find(item => item.id === Number(id));
			groupedItem.total = obj[id];
			_groupedItems.push(groupedItem);
		});
		console.log(_groupedItems);
		setGroupedItems([..._groupedItems]);
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