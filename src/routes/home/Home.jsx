import Daily from "../../components/daily-section/Daily";
import Deals from "../../components/deals-section/Deals";
import Header from "../../components/header/Header";
import Hero from "../../components/hero-section/Hero";
import ProductSection from "../../components/product-section/ProductSection";

const Home = () => {
	return (
		<>
			<Hero />;
			<ProductSection />
			<Daily />
			<Deals />
		</>
	);
};

export default Home;
