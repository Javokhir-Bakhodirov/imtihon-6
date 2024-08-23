import "./App.css";
import RouteController from "./routes";
import Header from "./components/header/Header";
import SiteFooter from "./components/footer/SiteFooter";
import { useLocation } from "react-router-dom";
import Container from "./components/container/Container";
import logo from "./img/logo.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const { pathname } = useLocation();
	return (
		<>
			{pathname === "/login" ? (
				<Container>
					<img src={logo} alt="" />
				</Container>
			) : (
				<Header />
			)}
			<main>
				<RouteController />
			</main>
			{pathname === "/login" ? null : <SiteFooter />}
			<ToastContainer />
		</>
	);
}

export default App;
