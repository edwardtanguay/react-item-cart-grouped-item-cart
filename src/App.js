import { Routes, Route } from 'react-router-dom';
import './App.scss';
import _Nav from './components/Nav';
import _PageHome from './pages/PageHome';
import _PageItemCart from './pages/PageItemCart';
import _PageGroupedItemCart from './pages/PageGroupedItemCart';
import { dataManager } from './managers/dataManager';
import { siteManager } from './managers/siteManager';

const Nav = siteManager(_Nav);
const PageHome = siteManager(dataManager(_PageHome));
const PageItemCart = siteManager(dataManager(_PageItemCart));
const PageGroupedItemCart = siteManager(dataManager(_PageGroupedItemCart));

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="content">
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="itemcart" element={<PageItemCart />} />
					<Route path="groupeditemcart" element={<PageGroupedItemCart />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
