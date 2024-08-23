import "./App.css";
import RouteController from "./routes";
import Header from "./components/header/Header";
import SiteFooter from "./components/footer/SiteFooter";

function App() {
	return (
		<>
			<Header />
			<main>
				<RouteController />
			</main>
			<SiteFooter />
		</>
	);
}

export default App;
