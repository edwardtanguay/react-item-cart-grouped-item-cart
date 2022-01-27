/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { PageLoader } from '../components/PageLoader';
import { config } from '../config';

let _items = config.dataSources.items.startsWith('http') ? [] : require(`../data/${config.dataSources.items}`);

const fetchData = async (url) => {
	const response = await fetch(url);
	return await response.json();
}

export const dataManager = Component => (props) => {
	const [dataLoaded, setDataLoaded] = useState(false);
	const [items, setItems] = useState([]);

	const prepareItems = (_items) => {
		_items.map(m => m.fullName = `${m.firstName} ${m.lastName}`);
		setItems([..._items]);
	}

	useEffect(() => {
		setTimeout(async () => {
			if (config.dataSources.items.startsWith('http')) {
				_items = await fetchData(config.dataSources.items);
			}
			prepareItems(_items);
			setDataLoaded(true);
		}, config.mockPageWaitTime * 1000);
	}, []);

	return !dataLoaded ? <PageLoader /> : <Component {...props} items={items} />
}