import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import like from "../../img/like.svg";
import ref from "../../img/ref.svg";
import star from "../../img/star.svg";

const Card = ({ product, cardType }) => {
	const renderStars = (rating) => {
		const stars = [];
		for (let i = 0; i < Math.round(rating); i++) {
			stars.push(
				<img
					className="text-gold "
					key={i}
					src={star}
					alt="star"
					width={18}
					height={18}
				/>
			);
		}
		return stars;
	};
	return (
		<li
			data-card-type={cardType}
			className="card grid grid-cols-1 items-center justify-center text-center"
		>
			<Link to={`/products/${product.id}`} className="card__link">
				<img src={product.images[0]} className="card__img" alt="" />
			</Link>
			<p className="card__text line-clamp-2">{product.title}</p>
			<p className="productCard__rating hidden  items-center mb-1">
				<span className="stars flex mr-5">{renderStars(product.rating)}</span>{" "}
				{product.rating}/<span>5</span>
			</p>
			<p className="card__price">${product.price}</p>
			<p className="card__was text-black opacity-45 hidden text-start">
				Was:{" "}
				<span className="line-through">${Math.floor(product.price + 20)}</span>
			</p>
			<p className="card__ship">Free shipping</p>
			<p className="card__sale opacity-45 hidden">
				<span className="line-through span mr-[10px]">
					${Math.floor(product.price + 20)}
				</span>{" "}
				-
				<span>
					{Math.floor(
						((product.price + 20 - product.price) / (product.price + 20)) * 100
					)}
					% OFF
				</span>
			</p>
			<p className="card__ref hidden">
				{" "}
				<img src={ref} alt="" />
				eBay Refurbished
			</p>

			<div className="hidden_wrapper hidden mt-[60px] flex items-center justify-between">
				<p className="hidden__text">SPONSORED</p>
				<img src={like} alt="" />
			</div>
		</li>
	);
};

export default Card;
