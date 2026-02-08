import "./globals.css";

export const metadata = {
	title: "Zodiac",
	description: "Zodiac demo"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
