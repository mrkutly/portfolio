import styled from "styled-components";

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

export default props => (
	<Footer>
		this page built with <Bold>React | Next.js | styled-components | Now</Bold>
	</Footer>
);
