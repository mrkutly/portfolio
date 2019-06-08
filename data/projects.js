// TODO: Add images with src and alt properties

export const projects = [
	{
		title: "SYFY Taboola Feed",
		description:
			"A custom feed of SYFY content and ads placed at the bottom of SYFY Wire's articles",
		tech: "JS | XML Web Crawler | CSS",
		repo: null,
		link:
			"https://www.syfy.com/syfywire/chosen-one-of-the-day-gamera-master-of-the-uneven-bars",
		image: {
			src: require("../static/syfy-ss.png"),
			alt: "SYFY ss",
		},
	},
	{
		title: "Mantra Percussion Site",
		description: "Website for the band Mantra Percussion",
		tech: "React | styled-components | Express | MongoDB",
		repo: {
			frontend: "https://github.com/mrkutly/mantra-frontend",
			backend: "https://github.com/mrkutly/mantra-server/tree/master/server",
		},
		link: "https://mantra-frontend.herokuapp.com",
		image: {
			src: require("../static/mantra-ss.png"),
			alt: "Mantra Percussion ss",
		},
	},
	{
		title: "CNBC Make It Taboola Feed",
		description:
			"A custom feed of CNBC Make It content and ads placed at the bottom of CNBC Make It's articles",
		tech: "JS | XML Web Crawler | XML recommendation algorithm rankers | CSS",
		repo: null,
		link:
			"https://www.cnbc.com/2019/05/30/draymond-green-the-mindset-you-need-to-succeed-at-anything.html",
		image: {
			src: require("../static/cnbc-ss.png"),
			alt: "CNBC Make It ss",
		},
	},
	{
		title: "Taboola React Native Plugin Example App",
		description:
			"An example application to show Taboola clients the best practices for implementing the Taboola React Native plugin",
		tech: "React-Native | styled-components",
		repo:
			"https://github.com/taboola/taboola-react-native-example/tree/master/full-example/TaboolaReactNativeExample",
		link: null,
		image: {
			src: require("../static/taboola-logo.png"),
			alt: "Taboola Logo",
		},
	},
];
