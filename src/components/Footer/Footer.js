import React from 'react';
import './Footer.css';

export default function Footer() {
	return (
		<div>
			<footer className="footer">
				<span className="cwd">
					&copy; 2020{' '}
					<a className="cinque" href="https://www.cinquewd.com">
						Cinque Web Development
					</a>
				</span>
				<div className="social-links">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/Cinque-Web-Development"
					>
						<i className="fab fa-github fa-3x" />
					</a>
					&nbsp;&nbsp;&nbsp;
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://twitter.com/cinquewebdev"
					>
						<i className="fab fa-twitter fa-3x" />
					</a>
					&nbsp;&nbsp;&nbsp;
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/company/cinque-web-dev"
					>
						<i className="fab fa-linkedin fa-3x" />
					</a>
				</div>
			</footer>
		</div>
	);
}
