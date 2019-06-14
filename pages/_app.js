import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Head>
					<link
						rel="shortcut icon"
						type="image/x-icon"
						href="/static/favicon.ico"
					/>
					<title>mark sauer-utley</title>
					<meta
						name="keywords"
						content="mark sauer-utley,developer,software,engineer,full-stack,frontend,front-end,javascript,js,next.js,gatsby,react,node.js,node,new york,nyc,new york city,brooklyn,web development"
					/>
				</Head>
				<Component {...pageProps} />
			</Container>
		);
	}
}
