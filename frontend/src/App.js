import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<>
			<div>
				<Header />
				<Outlet />
			</div>
			<div
				style={{
					width: '100%',
					bottom: '0',
				}}
			>
				<Footer />
			</div>
		</>
	);
};

export default App;
