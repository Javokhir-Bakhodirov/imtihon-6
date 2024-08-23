import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Categories = ({ category }) => {
	const [t, i18n] = useTranslation();
	return (
		<li className="categories__item  ">
			<NavLink
				// to={`/category/${category.name}`}
				to="/"
				className="text-xs font-normal 
        py-1
        leading-4 border-b-transparent hover:border-b-black ease-in duration-200 border-b-[2px] "
			>
				{t(category.name)}
			</NavLink>
		</li>
	);
};

export default Categories;
