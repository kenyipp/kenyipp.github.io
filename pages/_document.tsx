import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<Fonts />
				<Favicon />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

const Fonts = () => (
	<>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" />
		<link
			href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
			rel="stylesheet"
		/>
	</>
);

const Favicon = () => (
	<link rel="icon" type="image/x-icon" href="favicon.svg" />
);
