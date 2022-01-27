import { useContext } from 'react';
import AppContext from '../AppContext';

const PageGroupedItemCart = ({ items }) => {
	const { groupedItems } = useContext(AppContext);

	return (
		<>
			<div>There are {groupedItems.length} grouped items.</div>
		</>
	)
}
export default PageGroupedItemCart;