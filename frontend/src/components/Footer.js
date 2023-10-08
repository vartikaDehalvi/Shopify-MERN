import React from 'react';
const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div style={{ backgroundColor: 'black', color: ' rgb(245, 230, 147)' }}>
			<div style={{ textAlign: 'center', padding: '3%' }}>Shopify &copy;</div>
		</div>
	);
};

export default Footer;
