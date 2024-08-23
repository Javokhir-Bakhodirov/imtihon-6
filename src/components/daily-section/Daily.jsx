import React from "react";
import Container from "../container/Container";
import { useTranslation } from "react-i18next";
import logo from "../../img/logo.svg";
import "./Daily.css";
import { Link } from "react-router-dom";
import arrow from "../../img/arrow1.svg";
import daily from "../../img/daily2.png";
const Daily = () => {
	const { t } = useTranslation();
	return (
		<section className="pt-[50px] ">
			<Container>
				<div className=" wrapper flex justify-between">
					<div className="section-wrapper border-[1px] border-[#C1C1C1] p-8 w-[940px] ml-[30px]">
						<div className="logo-wrapper mb-[20px]">
							<p className="logo-wrapper__text opacity-[0.5]">
								{t("Featured")}
							</p>
							<img src={logo} alt="" width={90} height={40} />
						</div>
						<div className="daily__wrapper flex flex-col gap-[10px]">
							<h2 className="daily__title">
								{t("Deals made easy all year long.")}
							</h2>
							<p className="daily__text">{t("Free shipping. Best prices.")}</p>
							<Link
								to="/products"
								className="flex items-center border-black border-[1px] w-[200px] text-center justify-center"
							>
								{t("Get your thing")}{" "}
								<img className="ml-[20px] p-2" src={arrow} alt="" />
							</Link>
						</div>
					</div>
					<div className="bg-[#0A9294] w-[320px] h-[270px]">
						<img className="w-[320px] h-[270px]" src={daily} alt="" />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Daily;
