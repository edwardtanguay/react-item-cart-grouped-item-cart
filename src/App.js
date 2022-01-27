import { Routes, Route } from 'react-router-dom';
import './App.scss';
import _Nav from './components/Nav';
import _PageHome from './pages/PageHome';
import _PageEmployees from './pages/PageEmployees';
import _PageCustomers from './pages/PageCustomers';
import { dataManager } from './managers/dataManager';
import { siteManager } from './managers/siteManager';

const Nav = siteManager(_Nav);
const PageHome = siteManager(dataManager(_PageHome));
const PageEmployees = siteManager(dataManager(_PageEmployees));
const PageCustomers = siteManager(dataManager(_PageCustomers));

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="content">
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="employees" element={<PageEmployees />} />
					<Route path="customers" element={<PageCustomers />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
