import styled from "styled-components";
import Container from "./styles/Container";
import { Text, Bold } from "./styles/TextStyles";
import { Green, Blue, Purple } from "./styles/Colors";

const Email = styled.a`
	text-decoration: none;
	color: black;

	&:hover {
		color: ${Green};
	}
`;

export default props => (
	<Container>
		<h4>contact me here...</h4>
		<Text>
			<Bold textColor={Blue}>email ~> </Bold>
			<Email href="mailto:mark.sauer.utley@gmail.com">
				mark.sauer.utley@gmail.com
			</Email>
		</Text>
		<Text>
			<Bold textColor={Purple}>linkedin ~> </Bold>
			<Email href="https://www.linkedin.com">my profile</Email>
		</Text>
	</Container>
);
