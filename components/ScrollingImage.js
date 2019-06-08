import styled from "styled-components";
import { Black, Blue } from "./styles/Colors";

const ScrollBox = styled.div`
	padding: 2vh;
	margin: 5vh auto;
	height: 60vh;
	overflow: scroll;
	border: 1px solid ${Blue};
	/* border-bottom: 1px solid ${Black}; */
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
