import styled from "styled-components";
import { Blue } from "./styles/Colors";

const ScrollBox = styled.div`
	padding: 2vh;
	margin: 6vh auto;
	height: 60vh;
	overflow: scroll;
	border: 1px solid ${Blue};
	background-color: white;
`;

const Image = styled.img`
	width: 100%;
	max-width: 600px;
	height: auto;
`;

export default props => (
	<ScrollBox>
		<Image src={props.src} alt={props.alt} />
	</ScrollBox>
);
