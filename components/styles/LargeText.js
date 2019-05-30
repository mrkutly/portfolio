import styled from "styled-components";

export default styled.div`
	font-size: 20em;
	line-height: 0.51em;
	margin-top: 20vh;
	max-width: 700px;

	@media (max-width: 500px) {
		margin-top: 30vh;
		max-width: 480px;
		font-size: 10em;
	}
	/* text-shadow: 0.2px 0.2px hsla(255, 80%, 65%, 80%),
		-0.2px -0.2px hsla(255, 90%, 80%, 80%); */
`;
