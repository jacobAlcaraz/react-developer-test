import React from "react";

const Loading = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen items-center">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 border-opacity-50"></div>
				<p className="text-gray-600 text-lg">Loading...</p>
			</div>
		</>
	);
};

export default Loading;
