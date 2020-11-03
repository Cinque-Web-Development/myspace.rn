import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
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
			<div className="link-nav">
				<Link className="user-page" to="/user">
					User Page
				</Link>
			</div>
		</nav>
	);
}
