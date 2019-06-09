import Layout from "../components/Layout";
import Name from "../components/Name";
import { ArrowStyles } from "../components/styles/TextStyles";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default () => {
	return (
		<Layout>
			<Name />
			<ArrowStyles>&#x2193;</ArrowStyles>
			<About />
			<ArrowStyles>&#x2193;</ArrowStyles>
			<Contact />
			<Footer />
		</Layout>
	);
};
