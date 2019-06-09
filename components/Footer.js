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
	color: ${Black};
`;

export default props => (
	<Footer>
		this page built with{" "}
		<Bold>React | Next.js | styled-components | Now.sh</Bold> -{" "}
		<RepoLink href="https://github.com/mrkutly/portfolio" target="_blank">
			code here
		</RepoLink>{" "}
	</Footer>
);
