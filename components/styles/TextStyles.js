import styled from "styled-components";
import { Purple } from "./Colors";

export const Title = styled.a`
	text-decoration: none;
	color: black;
	font-size: 2.5em;
	font-weight: bold;

	&:hover {
		color: ${Purple};
	}
`;

export const Link = styled.a`
	text-decoration: none;
	color: black;
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
