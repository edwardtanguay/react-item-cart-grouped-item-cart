const PageCustomers = ({ InfoBox, customers, ukCustomers }) => {
	return (
		<>
			<h1>{customers.length} Customers</h1>
			<h1>{ukCustomers.length} UK Customers</h1>
			<p>This is the customer page.</p>
			<InfoBox title="Missing Data" status="warning">
				<p>Note that some customer information will not be available until next Monday.</p>
			</InfoBox>
		</>
	)
}
export default PageCustomers;