import Layout from "../components/Layout";
import { LargeText, ArrowStyles } from "../components/styles/TextStyles";
import Color from "../components/styles/withColor";
import { Purple } from "../components/styles/Colors";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default () => {
	return (
		<Layout>
			<LargeText>
				Mark Sauer
				<Color color={Purple}>-</Color>
				Utley
			</LargeText>
			<ArrowStyles>{`\uFFEC`}</ArrowStyles>
			<About />
			<ArrowStyles>{`\uFFEC`}</ArrowStyles>
			<Contact />
			<Footer />
		</Layout>
	);
};
