import { useContext } from "react";
import { DarkModeContext } from "../hooks/DarkModeContext";
import styled from "styled-components";
import { Black } from "./styles/Colors";

const Footer = styled.footer`
	letter-spacing: 0.5px;
	font-size: 1.5em;
	text-align: center;
	padding: 1em 0;
	border-top: 1px solid lightpink;
`;

const Bold = styled.span`
	font-weight: bold;
`;

const RepoLink = styled.a`
	text-decoration: underline;
	color: ${props => (props.darkMode ? "#cfcfcf" : Black)};
`;

export default props => {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<Footer>
			this page built with{" "}
			<Bold>React | Next.js | styled-components | Now.sh</Bold> -{" "}
			<RepoLink
				href="https://github.com/mrkutly/portfolio"
				target="_blank"
				darkMode={darkMode}
			>
				code here
			</RepoLink>{" "}
		</Footer>
	);
};
