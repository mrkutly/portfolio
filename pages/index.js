import { useContext, useState } from "react";
import { DarkModeContext } from "../hooks/DarkModeContext";
import ContextWrapper from "../components/ContextWrapper";
import Layout from "../components/Layout";
import Name from "../components/Name";
import { ArrowStyles } from "../components/styles/TextStyles";
import About from "../components/About";
import Stack from "../components/Stack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default () => {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<ContextWrapper>
			<Layout darkMode={darkMode}>
				<DarkModeSwitch />
				<Name />
				<ArrowStyles>&#x2193;</ArrowStyles>
				<Stack />
				<ArrowStyles>&#x2193;</ArrowStyles>
				<About />
				<ArrowStyles>&#x2193;</ArrowStyles>
				<Contact />
				<Footer />
			</Layout>
		</ContextWrapper>
	);
};
