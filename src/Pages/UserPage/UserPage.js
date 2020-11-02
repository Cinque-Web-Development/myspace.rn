import React from 'react';

import './UserPage.css';

export default function UserPage() {
	return (
		<div className="UserPage">
			<div className="left-col">
				<div className="user-info">
					<div className="user-info-left">
						<p>Kathleen</p>
						<img></img>
					</div>
					<div className="user-info-right">
						<p>headline</p>
						<p>Female</p>
						<p>28 years old</p>
						<p>Dallas, TX, United States</p>
						<p>Last Login: 11/2/2020</p>
					</div>
				</div>
				<div className="contact-links"></div>
				<div className="profile-song"></div>
			</div>
			<div className="right-col">
				<div className="user-about">
					<h3>Kathleen's Blurbs</h3>
					<h4>About me:</h4>
					<p>I'm the React Queen</p>
				</div>
				<div className="user-friends"></div>
			</div>
		</div>
	);
}
