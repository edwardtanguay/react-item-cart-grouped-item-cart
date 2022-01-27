const PageEmployees = ({ ukEmployees, usaEmployees, InfoBox }) => {
	return (
		<>
			<h1>Employees</h1>
			<h2>UK Employees</h2>
			<ul>
				{ukEmployees.map((emp, i) => {
					return (
						<li key={i}>{emp.fullName}</li>
					)
				})}
			</ul>
			<h2>USA Employees</h2>
			<ul>
				{usaEmployees.map((emp, i) => {
					return (
						<li key={i}>{emp.firstName} {emp.lastName}</li>
					)
				})}
			</ul>
			<InfoBox title="Note on Employees" width="70%">
				<p>The two groups listed are the top selling groups among the employees. Other groups include:</p>
				<ul>
					<li>Spain</li>
					<li>France</li>
					<li>Germany</li>
				</ul>
			</InfoBox>
		</>
	)
}
export default PageEmployees;