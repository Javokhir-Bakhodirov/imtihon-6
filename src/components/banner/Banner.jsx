import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import arrow from "../../img/arrow1.svg";
import "./Banner.css";
import useFetch from "../../hooks/useFetch";
import axios from "../../api/axios";

const Banner = () => {
	const [t] = useTranslation();

	const { data, loading, error } = useFetch("/products");

	if (loading) return <p>Loading...</p>;

	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="banner p-[30px] bg-[#FEB786;] h-[350px] flex justify-between">
			<div className="banner__text-block w-[330px] space-y-4 flex flex-col ">
				<h2 className="banner__title">{t("bannerTitle")}</h2>
				<p className="banner__text">{t("bannerText")}</p>
				<Link
					to="/"
					className="banner__link flex p-[10px] border-[1px] border-black max-w-[190px] text-center justify-center items-center"
				>
					{t("bannerLink")} <img src={arrow} alt="" className="ml-[10px]" />
				</Link>
			</div>
			<ul className="banner__list max-w-[920px] flex space-x-4">
				{data.slice(0, 3).map((product) => (
					<li
						key={product.id}
						className="banner__item maw-h-[310px] p-[10px] justify-between items-center flex flex-col "
					>
						<Link
							className="banner__link-p flex"
							to={`/products/${product.id}`}
						>
							{product.title} <img src={arrow} alt="" className="ml-[5px]" />
						</Link>
						<img
							src={product.images[0]}
							alt=""
							className="banner__img object-fill w-[250px]  "
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Banner;
