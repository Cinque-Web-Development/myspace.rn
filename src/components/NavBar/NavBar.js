import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar({ user, handleLogout }) {
	const history = useHistory();
	return (
		<nav className="nav-bar">
			<div
				className="logo-link"
				onKeyPress={event => {
					if (event.key === 'Enter') {
						history.push('/');
					}
				}}
				onClick={() => {
					history.push('/');
				}}
				role="button"
				tabIndex="0"
			>
				<img className="logo" alt="" src="/images/myspace-lo.png" />
				<span>OurSpace</span>
			</div>

			{user ? (
				<div className="nav-wrapper">
					<Link to={`/user/${user._id}`} className="nav-link">
						Welcome, {user.name}
					</Link>
					<Link to=" " onClick={handleLogout} className="nav-link">
						Log Out
					</Link>
					<div className="link-nav">
						<Link className="user-page" to="/user">
							User Page
						</Link>
					</div>
				</div>
			) : (
				<div className="nav-wrapper">
					<Link to="/login" className="nav-link">
						Log In
					</Link>
					<Link to="/signup" className="nav-link">
						Sign Up
					</Link>
				</div>
			)}
		</nav>
	);
}
