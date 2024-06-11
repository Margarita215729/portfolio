import "./style.css";

import instagram from './../../img/icons/instagram.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://www.instagram.com/grettkorff?igsh=azdzZzg5YnVmNnhq&utm_source=qr">
								<img src={instagram} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://github.com/Margarita215729">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://www.linkedin.com/in/margarita-makeeva-b48bb8277/">
								<img src={linkedIn} alt="Link" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;