import React from "react";
import Container from "../container/Container";
import "./SiteFooter.css";
import { useTranslation } from "react-i18next";
import twitter from "../../img/twitter.svg";
import facebook from "../../img/facebook.svg";
import "./SiteFooter.css";

const SiteFooter = () => {
	const { t } = useTranslation();
	return (
		<footer className="site-footer pt-[50px] border-gray-500 border-t-[1px]">
			<Container>
				<div className="footer flex items-start justify-between">
					<div className="footer__wrapper">
						<h2 className="footer__title">{t("Buy")}</h2>
						<ul className="footer__list1 space-y-3">
							<li className="footer__item1">{t("Registration")}</li>
							<li className="footer__item1">
								{t("eBay Money Back Guarantee")}
							</li>
							<li className="footer__item1">{t("Bidding & buying help")}</li>
							<li className="footer__item1">{t("Stores")}</li>
							<li className="footer__item1">{t("eBay for Charity")}</li>
							<li className="footer__item1">{t("Charity Shop")}</li>
							<li className="footer__item1">
								{t("Seasonal Sales and events")}
							</li>
						</ul>
					</div>
					<div className="footer__wrapper">
						<h2 className="footer__title">{t("Sell")}</h2>
						<ul className="footer__list1 ">
							<li className="footer__item1 ">{t("Start selling")}</li>
							<li className="footer__item1">{t("How to sell")}</li>
							<li className="footer__item1">{t("Business sellers")}</li>
							<li className="footer__item1">{t("Affiliates")}</li>
						</ul>
						<h2 className="footer__title mt-6">{t("Tools & apps")}</h2>
						<ul className="footer__list1">
							<li className="footer__item1">{t("Developers")}</li>
							<li className="footer__item1">{t("Security center")}</li>
							<li className="footer__item1">{t("Site map")}</li>
						</ul>
					</div>
					<div className="footer__wrapper">
						<h2 className="footer__title">{t("Stay connected")}</h2>
						<ul className="footer__list1">
							<li className="footer__item1 flex items-center">
								{" "}
								<img src={facebook} className="mr-3" alt="" />
								{t("Facebook")}
							</li>
							<li className="footer__item1 flex items-center">
								{" "}
								<img src={twitter} className="mr-3" alt="" />
								{t("Twitter")}
							</li>
						</ul>
					</div>
					<div className="footer__wrapper">
						<h2 className="footer__title">{t("About eBay")}</h2>
						<ul className="footer__list1">
							<li className="footer__item1">{t("Company info")}</li>
							<li className="footer__item1">{t("News")}</li>
							<li className="footer__item1">{t("Investors")}</li>
							<li className="footer__item1">{t("Careers")}</li>
							<li className="footer__item1">{t("Diversity & Inclusion")}</li>
							<li className="footer__item1">{t("Global Impact")}</li>
							<li className="footer__item1">{t("Government relations")}</li>
							<li className="footer__item1">{t("Advertise with us")}</li>
							<li className="footer__item1">{t("Policies")}</li>
							<li className="footer__item1">
								{t("Verified Rights Owner (VeRO) Program")}
							</li>
							<li className="footer__item1">{t("eCI Licenses")}</li>
						</ul>
					</div>
					<div className="footer__wrapper">
						<h2 className="footer__title">{t("Help & Contact")}</h2>
						<ul className="footer__list1">
							<li className="footer__item1">{t("Seller Center")}</li>
							<li className="footer__item1">{t("Contact Us")}</li>
							<li className="footer__item1">{t("eBay Returns")}</li>
						</ul>
						<h2 className="footer__title">{t("Community")}</h2>
						<ul className="footer__list1">
							<li className="footer__item1">{t("Announcements")}</li>
							<li className="footer__item1">{t("eBay Community")}</li>
							<li className="footer__item1">
								{t("eBay for Business Podcast")}
							</li>
						</ul>
						<h2 className="footer__title">{t("eBay Sites")}</h2>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default SiteFooter;
