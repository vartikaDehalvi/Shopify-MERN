import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Route } from 'react-router-dom';

const Rating = ({ value, text }) => {
	return (
		<div className="rating">
			<h6>Rating</h6>
			<div className="stars-container">
				<div className="stars">
					<span>
						{value >= 1 ? (
							<FaStar />
						) : value >= 0.5 ? (
							<FaStarHalfAlt />
						) : (
							<FaRegStar />
						)}
					</span>
					<span>
						{value >= 2 ? (
							<FaStar />
						) : value >= 1.5 ? (
							<FaStarHalfAlt />
						) : (
							<FaRegStar />
						)}
					</span>
					<span>
						{value >= 3 ? (
							<FaStar />
						) : value >= 2.5 ? (
							<FaStarHalfAlt />
						) : (
							<FaRegStar />
						)}
					</span>
					<span>
						{value >= 4 ? (
							<FaStar />
						) : value >= 3.5 ? (
							<FaStarHalfAlt />
						) : (
							<FaRegStar />
						)}
					</span>
					<span>
						{value >= 5 ? (
							<FaStar />
						) : value >= 4.5 ? (
							<FaStarHalfAlt />
						) : (
							<FaRegStar />
						)}
					</span>
				</div>
				<div className="rating-text">{text && text}</div>
			</div>
		</div>
	);
};

export default Rating;
