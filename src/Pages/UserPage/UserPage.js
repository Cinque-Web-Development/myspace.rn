import React from 'react';
import { Link } from 'react-router-dom';

import './UserPage.css';
import profilePhoto from '../../Assets/profile-photo-placeholder.png';
import musicPlayer from '../../Assets/music-player-placeholder.png';

export default function UserPage() {
	return (
		<div className="UserPage">
			<div className="left-col">
				<div className="user-info">
					<div className="user-info-left">
						<h2>Kathleen</h2>
						<img
							src={profilePhoto}
							alt="user"
							className="profile-photo"
						></img>
					</div>
					<div className="user-info-right">
						<p>I'm the React Queen</p>
						<p>Female</p>
						<p>28 years old</p>
						<p>Dallas, TX, United States</p>
						<p>
							<span id="last-login">Last Login:</span> 11/2/2020
						</p>
					</div>
				</div>
				<div className="contact-links">
					<h3 className="contact-heading">Contacting Kathleen</h3>
					<div className="contact-links-wrapper">
						<ul>
							<li>
								<Link>Send Message</Link>
							</li>
							<li>
								<Link>Add to Friends</Link>
							</li>
						</ul>
						<ul>
							<li>
								<Link>Add to Favorites</Link>
							</li>
							<li>
								<Link>Block User</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="profile-song">
					<img
						src={musicPlayer}
						alt="user-song-cover"
						className="music-player"
					></img>
				</div>
				<div className="profile-details"></div>
			</div>
			<div className="right-col">
				<div className="blurbs">
					<h3 className="orange-heading">Kathleen's Blurbs</h3>
					<h4 className="user-about-heading">About me:</h4>
					<p className="user-about">I'm the React Queen</p>
					<br />
					<h4 className="user-about-heading">
						Who I'd like to meet:
					</h4>
					<p className="user-about">Scott Kelly</p>
				</div>
				<div className="user-friends">
					<h3 className="orange-heading">Kathleen's Friend Space</h3>
					<div className="friends-wrapper">
						<h4>
							Kathleen has <span id="friend-count">10</span>{' '}
							friends
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
}
