import React from "react";
import { BiErrorAlt } from "react-icons/bi";

const ErrorFetch = () => {
	return (
		<div>
			<div className="flex flex-col items-center justify-center h-screen items-center">
				<p className="text-gray-600 text-lg flex flex-col items-center">
					<BiErrorAlt className="text-7xl" />
					Error fetching data
				</p>
			</div>
		</div>
	);
};

export default ErrorFetch;
