import React from "react";
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";
import { useTranslation } from "react-i18next";
import arrow from "../../img/arrow1.svg";
import { Link } from "react-router-dom";
import Container from "../container/Container";

const ProductSection = () => {
	const { data, loading, error } = useFetch("/products");
	const { t } = useTranslation();

	if (loading) return <p>Loading...</p>;

	if (error) return <p>Error: {error.message}</p>;

	return (
		<section className="product-section pt-[50px] ">
			<Container>
				<ul className="product-section__list grid grid-cols-7 mb-[50px]">
					{data.slice(0, 7).map((product) => (
						<Card cardType="circle" key={product.id} product={product} />
					))}
				</ul>
				<div className="product-section__wrapper flex space-x-[80px]">
					<h2 className="product-section__title text-[24px] italic font-normal leading-[32px] text-left">
						{t("productSectionTitle")}
					</h2>
					<Link
						to="/products"
						className="flex text-[20px] font-normal leading-[18px]  items-center "
					>
						{t("seeAll")} <img className="ml-[20px]" src={arrow} alt="" />
					</Link>
				</div>
			</Container>
		</section>
	);
};

export default ProductSection;
