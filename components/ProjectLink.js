import { useContext } from "react";
import { DarkModeContext } from "../hooks/DarkModeContext";
import styled from "styled-components";
import { Green } from "./styles/Colors";
import { Title } from "./styles/TextStyles";

const ListItem = styled.li`
	list-style: circle;
	margin: 2em 0;
	font-size: 2.5em;
`;

export default ({ project, setActiveProject }) => {
	const { darkMode } = useContext(DarkModeContext);

	const openModal = async e => {
		e.preventDefault();
		setActiveProject(project);
	};

	return (
		<ListItem>
			<Title
				darkMode={darkMode}
				href="/"
				onClick={openModal}
				hoverColor={Green}
			>
				{project.title}
			</Title>
		</ListItem>
	);
};
