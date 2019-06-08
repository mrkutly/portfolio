import styled from "styled-components";
import { Black } from "./styles/Colors";

const ScrollBox = styled.div`
	padding: 1vh 2vw 0 0;
	margin: 5vh auto;
	height: 60vh;
	overflow: scroll;
	border-top: 1px solid ${Black};
	border-bottom: 1px solid ${Black};
`;

const Image = styled.img`
	width: 100%;
	height: auto;
`;

export default props => (
	<ScrollBox>
		<Image src={props.src} alt={props.alt} />
	</ScrollBox>
);
