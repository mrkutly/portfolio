import Layout from "../components/Layout";
import LargeText from "../components/styles/LargeText";
import Color from "../components/styles/withColor";
import { Purple } from "../components/styles/Colors";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default () => (
	<Layout>
		<LargeText>
			Mark Sauer
			<Color color={Purple}>-</Color>
			Utley
		</LargeText>
		<LargeText>{`\u21A1`}</LargeText>
		<About />
		<LargeText>{`\u21A1`}</LargeText>
		<Contact />
		<Footer />
	</Layout>
);
