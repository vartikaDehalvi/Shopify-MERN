import { useState, useEffect } from 'react';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const { data } = await axios.get('/api/products');
				setProducts(data);
				console.log(data);
			} catch (error) {
				if (error.response) {
					// The request was made, but the server responded with a status code other than 2xx
					console.error('Server Error:', error.response.data);
				} else if (error.request) {
					// The request was made but no response was received
					console.error('No Response from Server');
				} else {
					// Something else happened while setting up the request
					console.error('Error:', error.message);
				}
			}
		};

		fetchProducts();
	}, []);

	return (
		<div className="home" style={{ fontSize: '1.2rem' }}>
			<div className="home-products">
				<h2>Latest Products</h2>
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={6} md={6} lg={4} xl={3} xs={12}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default HomeScreen;
