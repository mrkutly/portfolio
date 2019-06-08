import styled from "styled-components";
import { Purple, Black } from "./Colors";
import { flicker } from "./Animations";

export const LargeText = styled.div`
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

export const ArrowStyles = styled.div`
	color: ${Purple};
	font-size: 7em;
	line-height: 0.51em;
	margin: 30vh 0;
	max-width: 700px;
	opacity: 1;
	animation: ${flicker} 2.5s infinite cubic-bezier(0.63, 0.35, 0.64, 0.35);

	@media (max-width: 500px) {
		margin-top: 30vh;
		max-width: 480px;
		font-size: 10em;
	}
`;

export const Title = styled.a`
	text-decoration: none;
	color: ${Black};
	font-weight: bold;
	cursor: pointer;

	&:hover {
		color: ${props => props.hoverColor || Purple};
	}
`;

export const ModalTitle = styled.a`
	text-decoration: none;
	color: ${Black};
	font-weight: bold;
	font-size: 4em;
	cursor: pointer;

	&:hover {
		color: ${props => props.hoverColor || Purple};
	}
`;

export const Link = styled.a`
	text-decoration: none;
	color: ${Black};
	font-weight: bold;

	&:hover {
		color: ${props => props.hoverColor};
	}

	@media (max-width: 500px) {
		border-bottom: 2px solid ${props => props.hoverColor};
		border-top: 2px solid ${props => props.hoverColor};
		padding: 0.5em 1em;
		border-radius: 5%;
		margin-right: 1em;
		letter-spacing: 0.5px;

		&:nth-of-type(2) {
			margin-left: 1em;
		}
	}
`;

export const Text = styled.div`
	font-size: 1.8em;
	margin-top: 2.5vh;

	@media (max-width: 500px) {
		&:nth-last-of-type(1) {
			margin-top: 4vh;
		}
	}
`;

export const Bold = styled.span`
	font-weight: bold;
	color: ${props => props.textColor};
`;
