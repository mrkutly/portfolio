import React from "react";
import styled from "styled-components";
import Color from "./styles/WithColor";
import { LargeText } from "./styles/TextStyles";
import { Purple } from "./styles/Colors";

const SmallText = styled.div`
	margin-top: 4vh;
	margin-left: 5vw;
	font-size: 1.8em;
	letter-spacing: 0.5px;

	@media (max-width: 1000px) {
		margin-top: 6vh;
		margin-left: 1vw;
	}
`;

export default props => (
	<React.Fragment>
		<LargeText>
			Mark Sauer <Color color={Purple}>-</Color> Utley
		</LargeText>
		<SmallText>full-stack javascript developer.</SmallText>
	</React.Fragment>
);
