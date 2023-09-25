/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#6B5E62",
				secondary: "#D5CAD6",
				danger: "#FF0000",
				active: "#EAFFFD",
			},
		},
	},
	plugins: [],
};
