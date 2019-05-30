import styled from "styled-components";

export default props => {
	const Color = styled.span`
		color: ${props.color};
	`;

	return <Color>{props.children}</Color>;
};
