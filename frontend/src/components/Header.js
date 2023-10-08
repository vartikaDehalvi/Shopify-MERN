import React, { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
	const [showLinks, setShowLinks] = useState(false);

	const handleToggle = () => {
		setShowLinks(!showLinks);
	};

	return (
		<div>
			<header className="header">
				<nav>
					<Link
						to="/"
						className="brand a"
						style={{ fontWeight: '700', fontSize: '2.2rem' }}
					>
						Shopify
					</Link>

					<button className="menu-button" onClick={handleToggle}>
						Menu
					</button>

					<div className={`nav-links ${showLinks ? 'active' : 'passive'}`}>
						<Link
							to="/cart"
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
							className="icon-container a"
						>
							<FaShoppingCart />
							<div className="text">Cart</div>
						</Link>
						<div style={{ padding: '0 13%' }}></div>
						<Link
							to="/login"
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
							className="icon-container a"
						>
							<FaUser />
							<div className="text ">SignIn</div>
						</Link>
					</div>
				</nav>
			</header>
		</div>
	);
};
export default Header;
