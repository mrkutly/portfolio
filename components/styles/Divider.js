import styled from "styled-components";

const Divider = styled.div`
	margin: 10vh auto;
	font-size: 8em;

	@media (min-width: 501px) {
		display: none;
	}
`;

export default props => <Divider>{props.children}</Divider>;
