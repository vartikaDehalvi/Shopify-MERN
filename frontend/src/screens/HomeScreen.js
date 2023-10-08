import { useState, useEffect } from 'react';
import products from '../products';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';
// import axios from 'axios';
// import Product from '../components/Product';

const HomeScreen = () => {
	// const [products, setProducts] = useState([]);

	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		const { data } = await axios.get('/api/products'); //proxy added in package.json
	// 		setProducts(data);
	// 		console.log(data);
	// 	};

	// 	fetchProducts();
	// }, []);

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
