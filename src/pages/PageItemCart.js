const PageItemCart = ({ items }) => {
	return (
		<div className="pageItemCart">
			<fieldset>
				<legend>Store</legend>
				{items.map((item, i) => {
					return (
						<div key={i} className="item">{item.name}</div>
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