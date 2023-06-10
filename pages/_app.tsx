import { CssBaseline } from "@mui/material";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Provider } from "../components/Provider";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<NextSeo
				title="Ken Yip - Stay Hungry Stay Foolish"
				description="Hello. I am a Full Stack Developer. Hands on experience on popular frameworks/tools including Node.js, NextJs, ReactJS etc. Looking for accepting new challenges and keep improving myself."
				canonical="https://kenyip.cc"
				openGraph={{
					title: "Ken Yip - Stay Hungry Stay Foolish",
					description:
						"Hello. I am a Full Stack Developer. Hands on experience on popular frameworks/tools including Node.js, NextJs, ReactJS etc. Looking for accepting new challenges and keep improving myself.",
					url: "https://kenyipp.github.io",
					type: "profile",
					images: [
						{
							url: "https://kenyipp.github.io/favicon.svg",
							width: 512,
							height: 512,
							alt: "Ken Yip"
						}
					],
					profile: {
						firstName: "Ken",
						lastName: "Yip",
						username: "Ken Yip",
						gender: "male"
					}
				}}
			/>
			<SocialProfileJsonLd
				type="Person"
				name="Ken Yip"
				url="https://kenyipp.github.io"
				sameAs={[
					"https://www.facebook.com/ken2026",
					"https://github.com/kenyipp",
					"https://www.instagram.com/ken2027",
					"https://www.linkedin.com/in/yip-ken-70723413b",
					"https://twitter.com/kenyipcc"
				]}
			/>
			<Provider>
				<Component {...pageProps} />
				<CssBaseline />
			</Provider>
		</>
	);
}
