import { useContext } from 'react';
import AppContext from '../AppContext';

const PageItemCart = ({ items, getImagePathAndFileName }) => {
	const { addToCart, cart } = useContext(AppContext);

	return (
		<div className="page pageItemCart">
			<fieldset className="store">
				<legend>Store</legend>
				{items.map((item, i) => {
					return (
						<div key={i} className="item">
							<img onClick={() => addToCart(item)} src={getImagePathAndFileName(item.image_small)} alt="" />
						</div>
					)
				})}
			</fieldset>
			<fieldset className="cart">
				<legend>Item Cart</legend>
				{cart.items.map((item, i) => {
					return (
						<div className="itemCartItem" key={i}>
							<img onClick={() => addToCart(item)} src={getImagePathAndFileName(item.image_small)} alt="" />
							<div>{item.name}</div>
						</div>)
				})}
			</fieldset>
		</div>
	)
}
export default PageItemCart;