import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../../components/Footer/Footer';
import UserPage from '../UserPage/UserPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';

import userService from '../../services/userService';

import './App.css';

export default function App() {
	const [user, setUser] = useState('');

	const handleLogout = () => {
		userService.logout();
		setUser(null);
	};

	const handleSignupOrLogin = () => {
		setUser(userService.getUser());
	};

	return (
		<>
			<Router>
				<NavBar user={user} handleLogout={handleLogout} />
				<Route exact path="/" render={() => <LandingPage />} />
				<Route exact path="/user" render={() => <UserPage />} />
				<Route
					exact
					path="/login"
					render={({ history }) => (
						<LoginPage
							history={history}
							handleSignupOrLogin={handleSignupOrLogin}
						/>
					)}
				/>

				<Route
					exact
					path="/signup"
					render={({ history }) => (
						<SignupPage
							history={history}
							handleSignupOrLogin={handleSignupOrLogin}
						/>
					)}
				/>
				<Footer />
			</Router>
		</>
	);
}
