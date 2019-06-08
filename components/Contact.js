import styled from "styled-components";
import Container from "./styles/Container";
import { Text, Bold } from "./styles/TextStyles";
import { Green, Blue, Purple, Black } from "./styles/Colors";

const Email = styled.a`
	text-decoration: none;
	color: ${Black};

	&:hover {
		color: ${props => props.hoverColor || Green};
	}
`;

export default props => (
	<Container>
		<h4>contact me here...</h4>
		<Text>
			<Bold textColor={Green}>email ~> </Bold>
			<Email target="_blank" href="mailto:mark.sauer.utley@gmail.com">
				mark.sauer.utley@gmail.com
			</Email>
		</Text>
		<Text>
			<Bold textColor={Blue}>github ~> </Bold>
			<Email
				target="_blank"
				hoverColor={Blue}
				href="https://github.com/mrkutly"
			>
				mrkutly
			</Email>
		</Text>
		<Text>
			<Bold textColor={Purple}>linkedin ~> </Bold>
			<Email
				target="_blank"
				hoverColor={Purple}
				href="https://www.linkedin.com"
			>
				my profile
			</Email>
		</Text>
	</Container>
);
