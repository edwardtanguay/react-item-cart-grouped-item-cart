import { useContext } from 'react';
import AppContext from '../AppContext';

const PageGroupedItemCart = ({ getImagePathAndFileName }) => {
	const { groupedItems } = useContext(AppContext);

	return (
		<>
			<fieldset className="cart">
				<legend>Item Cart</legend>
				{groupedItems.map((item, i) => {
					return (
						<div className="itemCartItem" key={i}>
							<img src={getImagePathAndFileName(item.image_small)} alt="" />
							<div>{item.name} ({item.total})</div>
						</div>)
				})}
			</fieldset>
		</>
	)
}
export default PageGroupedItemCart;