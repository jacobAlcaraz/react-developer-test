import React from "react";

const Button = ({ className, style, children, ...props }) => {
	return (
		<>
			<div
				className={`p-2 font-medium flex justify-center items-center${className}`}
				{...props}
				style={style}
			>
				{children}
			</div>
		</>
	);
};

export default Button;
