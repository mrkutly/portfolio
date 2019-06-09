import styled from "styled-components";
import { Purple } from "./Colors";

const Divider = styled.div`
	margin: calc(10vh + 0.4em) auto 10vh auto;
	font-size: 8em;
	color: ${Purple};

	@media (min-width: 1001px) {
		display: none;
	}
`;

export default props => <Divider>{props.children}</Divider>;
