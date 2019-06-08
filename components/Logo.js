import styled from "styled-components";

const Container = styled.div`
	margin: 5vh auto;
	height: auto;
	max-width: auto;
	overflow: hidden;
`;

const Image = styled.img`
	position: relative;
	width: auto;
	height: 15vh;
`;

export default props => (
	<Container>
		<Image src={props.src} alt={props.alt} />
	</Container>
);
