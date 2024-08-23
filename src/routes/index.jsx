import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./home/Home"));
const Products = lazy(() => import("./products/Products"));
const SinglePage = lazy(() => import("./single-page/SinglePage"));

const RouteController = () => {
	return useRoutes([
		{
			path: "/",
			element: (
				<Suspense fallback={<div>Loading...</div>}>
					<Home />
				</Suspense>
			),
		},
		{
			path: "/products",
			element: (
				<Suspense fallback={<div>Loading...</div>}>
					<Products />
				</Suspense>
			),
		},
		{
			path: "/products/:id",
			element: (
				<Suspense fallback={<div>Loading...</div>}>
					<SinglePage />
				</Suspense>
			),
		},
	]);
};

export default RouteController;
