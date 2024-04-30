/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
			// serif: ["Merriweather", "serif"],
		},
		extend: {
			spacing: {
				"8xl": "96rem",
				"9xl": "128rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			fontWeight: {
				thin: 100,
				light: 300,
				normal: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
				extrabold: 800,
				black: 900,
			},
			colors: {
				primary: "#ef4444",
				secondary: "#f37070",
				ternary: "#908f8e",
				bgPrimary: "#1c1917",
				bgSecondary: "#272320",
				bgTernary: "#2f2c2a",
				bgPrimaryWhite: "#f9f9f9",
			},
		},
	},
};
