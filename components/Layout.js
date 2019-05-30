import styled from "styled-components";

const Layout = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	color: black;
	font-size: 10px;
	font-family: Arial, Helvetica, sans-serif;

	@media (max-width: 500px) {
		margin-top: 30vh;
		max-width: 480px;
	}
`;

export default props => <Layout>{props.children}</Layout>;
