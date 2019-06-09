import styled from "styled-components";
import Container from "./styles/Container";

const ListItem = styled.li`
	font-size: 2.5em;
	font-weight: 600;
	letter-spacing: 0.5px;
`;

export default props => (
	<Container>
		<h4>tech i like to use</h4>
		<ul>
			<ListItem>react.js</ListItem>
			<ListItem>next.js</ListItem>
			<ListItem>graphql</ListItem>
			<ListItem>express</ListItem>
			<ListItem>mongoDB</ListItem>
			<ListItem>ruby on rails</ListItem>
		</ul>
	</Container>
);
