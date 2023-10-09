import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Rating from '../components/Rating';

const ProductScreen = () => {
	const [product, setProduct] = useState([]);

	const { id: productId } = useParams();

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get(`/api/products/${productId}`); //proxy added in package.json
			setProduct(data);
		};

		fetchProducts();
	}, [productId]);

	return (
		<div className="productScreen">
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>

			<Row className="productsScreen-row">
				<Col style={{ padding: '0' }} md={5} className="productScreen-col">
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={4} className="productScreen-col">
					<ListGroup.Item>
						<h3
							style={{
								borderBottom: '2px solid rgba(73, 65, 20, .4)',
								paddingBottom: '4%',
							}}
						>
							{product.name}
						</h3>
					</ListGroup.Item>

					<ListGroup.Item
						style={{
							borderBottom: '2px solid rgba(73, 65, 20, .4)',
							paddingBottom: '4%',
						}}
					>
						<Rating
							className="productScreenRating"
							value={product.rating}
							text={`${product.numReviews} Reviews`}
						/>
					</ListGroup.Item>
					<ListGroup.Item>
						<p
							style={{
								borderBottom: '2px solid rgba(73, 65, 20, .4)',
								padding: '4%',
							}}
						>
							<strong>Description: </strong>
							{product.description}
						</p>
					</ListGroup.Item>
				</Col>
				<Col md={3} className="productScreen-col productScreen-col-3">
					<div>
						<ListGroup.Item>
							<h3
								style={{
									borderBottom: '2px solid rgba(73, 65, 20, .4)',
									paddingBottom: '4%',
								}}
							>
								<strong>Price: ${product.price}</strong>
							</h3>
							<strong>
								<h5
									style={{
										borderBottom: '2px solid rgba(73, 65, 20, .4)',
										padding: '5%',
									}}
								>
									{product.countInStock > 0
										? 'In Stock'
										: 'Not Available at the Moment'}
								</h5>
							</strong>
						</ListGroup.Item>
						<ListGroup.Item
							style={{
								boxShadow: ' 0px 0px 15px 5px rgba(0, 0, 0,0)',
							}}
						>
							<>
								<Button
									className="btn-block"
									type="button"
									disabled={product.countInStock === 0}
								>
									Add to Cart
								</Button>
							</>
						</ListGroup.Item>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default ProductScreen;
