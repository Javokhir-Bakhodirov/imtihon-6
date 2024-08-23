import React from "react";
import Container from "../../components/container/Container";
import "./SinglePage.css";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Carousel } from "antd";
import span from "../../img/span.svg";

// const contentStyle = {
// 	margin: 0,
// 	height: "700px",
// 	color: "#fff",
// 	lineHeight: "60px",
// 	textAlign: "center",
// 	background: "#364d79",
// 	objectFit: "cover",
// };

const SinglePage = () => {
	const { t } = useTranslation();
	const { id } = useParams();

	const [data, setData] = useState({});

	useEffect(() => {
		axios.get(`/products/${id}`).then((res) => setData(res.data));
	}, [id]);
	console.log(data);

	return (
		<section className="single-page  py-[100px]">
			<Container>
				<h1 className="page__sale flex items-center mb-[15px]">
					<img src={span} alt="" className=" mb-[5px] " />
					{t("EXTRA")} <span className="text-[#DD1E31]"> $10</span>{" "}
					{t("OFF 3+ ITEMS WITH CODE")}{" "}
					<span className="text-[#DD1E31]">10OFF2023TECH</span>
				</h1>
				<div className="main-wrapper flex gap-[45px]">
					<div className="single-page__wrapper">
						<div className="single-page__images flex ">
							<div className="single-page__thumbnails ">
								{data.images?.map((image, index) => (
									<img
										key={index}
										src={image}
										alt={`Thumbnail ${index + 1}`}
										className="thumbnail__image object-contain !w-[90px] !h-[90px] border-[#C1C1C1] border-[1px] rounded-[5px]"
									/>
								))}
							</div>
							<div className="single-page__carousel !w-[500px] !h-[700px] ml-[0px] ">
								<Carousel autoplay={true} infinite={true} autoplaySpeed={3000}>
									{data.images?.map((image, index) => (
										<div key={index} className="carousel__image">
											<div className="bg-[#F2F2F2]">
												<img
													src={image}
													className="object-contain w-[700px] h-[700px]"
													alt={`Product image ${index + 1}`}
												/>
											</div>
										</div>
									))}
								</Carousel>
							</div>
						</div>
					</div>
					<div className="page__details details">
						<h2 className="details__title pb-[6px]">
							<strong>{data.title}</strong> - {data.description}
						</h2>
						<div className="details__content grid  items-center justify-center mt-[50px] border-t-[1px] border-[ #C9C9C9 ] pt-[40px] max-w-[900px]">
							<div className="">
								<div className="details__category flex items-center">
									<p
										className="
									w-[160px] text-right"
									>
										{t("Category")} :{" "}
									</p>
									<div className="p-[2px] min-w-[290px] border-[2px] ml-3 border-[ #C9C9C9] bg-[#EBEBEB] rounded-[4px]">
										{data.category}
									</div>{" "}
								</div>
							</div>
							<div className="details__category-box ">
								<div className="mt-[30px]">
									<div className="details__category flex items-center">
										<p
											className="
									w-[160px] text-right"
										>
											{t("Warranty information")} :{" "}
										</p>
										<div className="p-[2px] min-w-[290px] border-[2px] ml-3 border-[ #C9C9C9] bg-[#EBEBEB] rounded-[4px]">
											{data.warrantyInformation}
										</div>{" "}
									</div>
								</div>
								<div className="mt-[30px]">
									<div className="details__category flex items-center">
										<p
											className="
									w-[160px] text-right"
										>
											{t("Shipping Information")} :{" "}
										</p>
										<div className="p-[2px] min-w-[290px] border-[2px] ml-3 border-[ #C9C9C9] bg-[#EBEBEB] rounded-[4px]">
											{data.shippingInformation}
										</div>
									</div>
								</div>
								<div className="mt-[30px]">
									<div className="details__category flex items-center">
										<p
											className="
									w-[160px] text-right"
										>
											{t("Return Policy")} :{" "}
										</p>
										<div className="p-[2px] min-w-[290px] border-[2px] ml-3 border-[ #C9C9C9] bg-[#EBEBEB] rounded-[4px]">
											{data.returnPolicy}
										</div>
									</div>
								</div>

								<div className="mt-[30px]">
									<div className="details__category flex items-center ">
										<p
											className="
									w-[160px] text-right"
										>
											{t("Brand")} :{" "}
										</p>
										<div className="p-[2px] min-w-[290px] border-[2px] ml-3 border-[ #C9C9C9] bg-[#EBEBEB] rounded-[4px]">
											{data.brand}
										</div>
									</div>
								</div>

								<div className="last mt-[20px]  ml-[20px] p-[30px] ">
									<p className="last__text">
										{" "}
										<span className="text-red-600">
											{" "}
											{t("Lsat One")}
										</span> /{" "}
										<span className="text-red-600">
											{data.minimumOrderQuantity} {t("Sold")}
										</span>
									</p>
								</div>
							</div>
							<div className="details__price-box flex justify-between	">
								<div className=" mt-[50px]">
									<div className="details__category flex items-center">
										<p
											className="
									w-[150px] text-right"
										>
											{t("Price")} :
										</p>
										<div className="  font-inter text-[22px] font-bold leading-[31.92px] text-left">
											${data.price}
										</div>
									</div>
								</div>
								<div className="details__buttons grid grid-cols-1 gap-[10px] mt-[50px]  ml-[160px]">
									<button className="w-[250px] p-[10px] rounded-[22px] text-white border-[1px] border-[#0053A0] bg-[#0053A0] font-inter text-[13px] font-bold leading-[20.02px] text-center">
										{t("Buy It Now")}
									</button>
									<button className="w-[250px] p-[10px] rounded-[22px] text-white border-[1px] border-[#3498CA] bg-[#3498CA] font-inter text-[13px] font-bold leading-[20.02px] text-center">
										{t("Add to cart")}
									</button>
									<button className="w-[250px] p-[10px] rounded-[22px] text-[#3665F3] border-[1px] border-[#3665F3] bg-[transparent] font-inter text-[13px] font-bold leading-[20.02px] text-center">
										{t("Add to Watchlist")}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default SinglePage;
