import React from "react";
import Container from "../container/Container";
import "./Hero.css";
import categories from "../../data/categories";
import Categories from "../categories/Categories";
import { Outlet } from "react-router-dom";
import Banner from "../banner/Banner";

const Hero = () => {
	return (
		<section className="hero-section ">
			<Container>
				<ul className="hero__categories flex items-center justify-between border-t-[2px] border-gray-300 pb-[2px]">
					{categories.map((category) => (
						<Categories key={category.id} category={category} />
					))}
				</ul>
				<Banner />
			</Container>
		</section>
	);
};

export default Hero;
