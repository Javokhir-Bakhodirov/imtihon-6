import React from "react";

const Container = ({ children }) => {
	return (
		<div className="container max-w-[1350px] pt-[20px] mx-auto">{children}</div>
	);
};

export default Container;
