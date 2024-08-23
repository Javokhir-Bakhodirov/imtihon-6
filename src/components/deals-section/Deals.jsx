import Container from "../container/Container";
import { useTranslation } from "react-i18next";
import React from "react";
import arrow from "../../img/arrow1.svg";
import "./Deals.css";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";

const Deals = () => {
	const { data, loading, error } = useFetch("/products");
	const { t } = useTranslation();
	return (
		<section className="py-[100px] ">
			<Container>
				<div className="deals__wrapper flex items-center mb-[50px]">
					<h2 className="deals__title mr-[90px]">{t("dealsTitle")}</h2>

					<Link
						to="/products"
						className="flex text-[20px] font-normal leading-[18px]  items-center "
					>
						{t("seeAll")} <img className="ml-[20px]" src={arrow} alt="" />
					</Link>
				</div>
				<ul className="deals__list grid grid-cols-7 gap-2">
					{data.slice(0, 7).map((product) => (
						<Card key={product.id} product={product} cardType="square" />
					))}
				</ul>
			</Container>
		</section>
	);
};

export default Deals;
