import { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../hooks/DarkModeContext";
import { Purple, Black } from "./styles/Colors";

const ButtonStyles = styled.button`
	padding: 10px;
	border-bottom: 1px solid ${Purple};
	border-top: none;
	border-left: none;
	border-right: none;
	font-weight: 600;
	font-size: 1.4em;
	box-shadow: none;
	position: sticky;
	top: 2vh;
	left: 85vw;
	color: ${props => (props.darkMode ? "#cfcfcf" : Black)};
	background-color: transparent;

	&:active {
		outline-color: ${Purple};
	}

	&:focus {
		outline-color: ${Purple};
	}

	@media (max-width: 1000px) {
		position: absolute;
		right: 5vw;
		top: 2vh;
		left: auto;
	}
`;

export default () => {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
	return (
		<ButtonStyles darkMode={darkMode} onClick={toggleDarkMode}>
			click for {darkMode ? "light mode" : "dark mode"}
		</ButtonStyles>
	);
};
