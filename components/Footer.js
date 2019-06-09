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
	text-decoration: none;
	color: ${Black};
`;

export default props => (
	<Footer>
		this page built with{" "}
		<RepoLink
			href="https://github.com/mrkutly/portfolio"
			tRepoLinkrget="_blank"
		>
			<Bold>React | Next.js | styled-components | Now.sh</Bold>
		</RepoLink>
	</Footer>
);
