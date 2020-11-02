import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../../components/Footer/Footer';

import './App.css';

export default function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Route exact path="/" render={() => <LandingPage />} />
				<Footer />
			</Router>
		</>
	);
}
