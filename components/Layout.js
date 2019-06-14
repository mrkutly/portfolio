import { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../hooks/DarkModeContext";
import { Black } from "./styles/Colors";

const Outer = styled.div`
	margin: 0;
	width: 100%;
	height: auto;
	position: absolute;
	top: 0;
	left: 0;
	color: ${props => (props.darkMode ? "#cfcfcf" : Black)};
	background-color: ${props => (props.darkMode ? "#111" : "transparent")};
`;
const Layout = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	font-size: 10px;
	font-family: Arial, Helvetica, sans-serif;

	@media (max-width: 1000px) {
		margin-top: 30vh;
		max-width: 90vw;
	}
`;

export default props => {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<Outer darkMode={darkMode}>
			<Layout>{props.children}</Layout>
		</Outer>
	);
};
