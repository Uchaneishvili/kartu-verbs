/** @format */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage/Mainpage';
import DetailPage from './pages/DetailPage/DetailPage';
import Allverb from './pages/Allverb/Allverb';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					exact
					element={<Mainpage />}
				/>
				<Route
					path='/DetailPage'
					exact
					element={<DetailPage />}
				/>
				<Route
					path='/DetailPage/:id'
					exact
					element={<DetailPage />}
				/>
				<Route
					path='/Allverb'
					element={<Allverb />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
