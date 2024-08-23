import { Link } from "react-router-dom";
import Container from "../container/Container";
import "./Header.css";
import { useTranslation } from "react-i18next";
import notification from "../../img/notification.svg";
import banch from "../../img/banch.svg";
import logo from "../../img/logo.svg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Input } from "antd";

const Header = () => {
	const items = [
		{
			label: (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.antgroup.com"
				>
					1st menu item
				</a>
			),
			key: "0",
		},
		{
			label: (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.aliyun.com"
				>
					2nd menu item
				</a>
			),
			key: "1",
		},
		{
			type: "divider",
		},
		{
			label: "3rd menu item（disabled）",
			key: "3",
			disabled: true,
		},
	];

	const [t, i18n] = useTranslation();
	const handleChangeLanguage = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	const { Search } = Input;

	const onSearch = () => {
		console.log("search");
	};
	return (
		<header className="site-header sticky top-0 bg-white z-50 pb-[20px]">
			<Container>
				<div className="header__top top flex justify-between items-center border-b-2 pb-[10px]">
					<div className="flex space-x-[20px]">
						<p className="top__text items-center">
							{t("hi")}!{" "}
							<Link to="/login" className="text-blue-600 underline">
								{t("Sign in")}
							</Link>{" "}
							{t("or")}{" "}
							<Link to="/" className="text-blue-600 underline">
								{t("register")}
							</Link>
						</p>
						<ul className="top__list space-x-4 flex items-center">
							<li className="top__item">
								<Link>{t("Daily Deals")}</Link>
							</li>
							<li className="top__item">
								<Link>{t("Brand Outlet")}</Link>
							</li>
							<li className="top__item">
								<Link>{t("Help & Contact")}</Link>
							</li>
						</ul>
					</div>

					<div className=" flex">
						<ul className="top__list space-x-4 flex items-center">
							<li className="top__item hover:text-blue-600 duration-200 ease-linear">
								<Link>{t("Sell")}</Link>
							</li>
							<li className="top__item">
								<Link>{t("Watchlist")}</Link>
							</li>
							<li className="top__item">
								<Link>{t("My eBay")}</Link>
							</li>
							<li className="top__item">
								<Link>
									<img src={notification} alt=""></img>
								</Link>
							</li>
							<li className="top__item">
								<Link>
									<img src={banch} alt=""></img>
								</Link>
							</li>
						</ul>
						<select
							className="ml-[16px]"
							defaultValue={i18n.language}
							onChange={handleChangeLanguage}
						>
							<option value="en">En</option>
							<option value="ru">Ru</option>
							<option value="uz">Uz</option>
						</select>
					</div>
				</div>
				<div className="header__bottom bottom pt-[10px] flex items-center justify-between">
					<Link to="/">
						<img src={logo} alt="logo" className="mr-[20px]" />
					</Link>
					<Dropdown
						className="mr-[50px]"
						menu={{
							items,
						}}
					>
						<a onClick={(e) => e.preventDefault()}>
							<Space className="sdrop">
								{t(`Shop by category`)}
								<DownOutlined />
							</Space>
						</a>
					</Dropdown>
					<Space direction="vertical">
						<Search
							className="w-[1000px] "
							placeholder={t("Search for anything")}
							allowClear
							enterButton="Search"
							size="large"
							onSearch={onSearch}
						/>
					</Space>
					<p className="ml-[20px] search__text">{t("Advanced")}</p>
				</div>
			</Container>
		</header>
	);
};

export default Header;
