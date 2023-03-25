/** @format */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage/Mainpage';
import DetailPage from './pages/DetailPage/DetailPage';

function App() {
	return (
		<div>
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
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
