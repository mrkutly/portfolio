import { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../hooks/DarkModeContext";
import Container from "./styles/Container";
import { Text, Bold } from "./styles/TextStyles";
import { Green, Blue, Purple, Black } from "./styles/Colors";

const Email = styled.a`
	text-decoration: none;
	color: ${props => (props.darkMode ? "#cfcfcf" : Black)};

	&:hover {
		color: ${props => props.hoverColor || Green};
	}
`;

export default props => {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<Container>
			<h4>contact me here...</h4>
			<Text>
				<Bold textColor={Green}>email ~> </Bold>
				<Email
					darkMode={darkMode}
					target="_blank"
					href="mailto:mark.sauer.utley@gmail.com"
				>
					mark.sauer.utley@gmail.com
				</Email>
			</Text>
			<Text>
				<Bold textColor={Blue}>github ~> </Bold>
				<Email
					target="_blank"
					hoverColor={Blue}
					darkMode={darkMode}
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
					darkMode={darkMode}
					href="https://www.linkedin.com"
				>
					my profile
				</Email>
			</Text>
		</Container>
	);
};
