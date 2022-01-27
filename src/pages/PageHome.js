const PageHome = ({ InfoBox, employees, customers, config }) => {
	return (
		<>
			<h1>Plant Shop</h1>
			<p>This site demonstrates how to have two shopping carts with the same content but different modes of display:</p>
			<ul>
				<li>show every single product in the cart</li>
				<li>show items as groups of similar products</li>
			</ul>
			<p>Each cart is on its own page in order to demonstrate that the cart information is saved globally in AppContext.</p>
		</>
	)
}
export default PageHome;