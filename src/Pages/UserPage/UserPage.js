import React from 'react';

import './UserPage.css';
import profilePhoto from '../../Assets/profile-photo-placeholder.png';

export default function UserPage() {
	return (
		<div className="UserPage">
			<div className="left-col">
				<div className="user-info">
					<div className="user-info-left">
						<h2>Kathleen</h2>
						<img src={profilePhoto} className="profile-photo"></img>
					</div>
					<div className="user-info-right">
						<p>I'm the React Queen</p>
						<p>Female</p>
						<p>28 years old</p>
						<p>Dallas, TX, United States</p>
						<p>Last Login: 11/2/2020</p>
					</div>
				</div>
				<div className="contact-links">
					<h3>Contacting Kathleen</h3>
				</div>
				<div className="profile-song"></div>
			</div>
			<div className="right-col">
				<div>
					<h3>Kathleen's Blurbs</h3>
					<h4 className="user-about-heading">About me:</h4>
					<p className="user-about">I'm the React Queen</p>
				</div>
				<div className="user-friends"></div>
			</div>
		</div>
	);
}
