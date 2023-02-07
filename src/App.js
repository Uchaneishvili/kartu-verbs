/** @format */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage/Mainpage';

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
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
