import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props =>
			sheet.collectStyles(<App {...props} />)
		);
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		return (
			<html>
				<Head>
					<link
						rel="shortcut icon"
						type="image/x-icon"
						href="/static/favicon.ico"
					/>
					<title>mark sauer-utley</title>
					<meta name="keywords" content="mark sauer-utley,developer,software,engineer,full-stack,frontend,front-end,javascript,js,next.js,gatsby,react,node.js,node,new york,nyc,new york city,brooklyn,web development"></meta>
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
