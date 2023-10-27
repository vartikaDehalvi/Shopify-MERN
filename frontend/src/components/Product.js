import { Card } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<div className="product-container">
			<div className="cards-container">
				{' '}
				<div className="cards">
					<Link className="product-image-link" to={`/product/${product._id}`}>
						<img src={product.image} alt="" className="product-image" />
					</Link>
					<Link to={`/product/${product._id}`}>
						<div className="product-title">
							<strong>{product.name}</strong>
						</div>
					</Link>
					<h3> ${product.price}</h3>

					<Rating
						value={product.rating}
						text={`${product.numReviews} Reviews`}
					/>
				</div>
			</div>
		</div>
	);
};

export default Product;
