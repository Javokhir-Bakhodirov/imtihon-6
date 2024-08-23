import React from "react";
import Container from "../../components/container/Container";
import { useTranslation } from "react-i18next";
import apple from "../../img/sale.png";
import "./Products.css";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/card/Card";

const Products = () => {
	const { data, loading, error } = useFetch("/products");
	const { t } = useTranslation();

	if (loading) return <p>Loading...</p>;

	if (error) return <p>Error: {error.message}</p>;
	return (
		<section className="sale-section pt-[50px] pb-[150px] ">
			<Container>
				<div className="sale ">
					<h1 className="sale__title mb-[24px]">{t("Featured Event")}</h1>
					<img src={apple} alt="" className="w-full" />
					<div className="sale__wrapper wrapper p-4 border-b-[1px] border-gray-500">
						<h2 className="wrapper__title">{t("Up to 60% off Apple tech")}</h2>
						<p className="wrapper__text">
							{t("Save on AirPods, iPhones, and more.")}
						</p>
					</div>
					<ul className="sale__list mt-[30px] grid grid-cols-5 gap-[25px]">
						{data.map((product) => (
							<Card key={product.id} product={product} cardType="full" />
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default Products;
