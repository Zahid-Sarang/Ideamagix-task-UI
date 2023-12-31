/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#fff",
				secondary: "#ffffffb2",
				theme: "#0F172A",
				"sidebar-bg": "#1E293B",
				"primary-btn": "#FCE7F3",
				"secondary-btn": "#DB2677",
				"follow-btn": "#324150",
			},
			screens: {
				"3xl": "2000px",
			},
		},
	},
	plugins: [],
};
