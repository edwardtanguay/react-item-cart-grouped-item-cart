import { useContext } from 'react';
import AppContext from '../AppContext';

const PageItemCart = ({ items }) => {
	const { addToCart } = useContext(AppContext);

	const getImagePathAndFileName = (pathAndFileName) => {
		return pathAndFileName.substring(1);
	}
	return (
		<div className="page pageItemCart">
			<fieldset>
				<legend>Store</legend>
				{items.map((item, i) => {
					return (
						<div key={i} className="item">
							<img onClick={() => addToCart(item)} src={getImagePathAndFileName(item.image_small)} alt="" />
						</div>
					)
				})}
			</fieldset>
			<fieldset>
				<legend>Item Cart</legend>
				{items.map((item, i) => {
					return (
						<div key={i} className="item">{item.name}</div>
					)
				})}
			</fieldset>
		</div>
	)
}
export default PageItemCart;