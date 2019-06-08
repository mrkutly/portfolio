import styled from "styled-components";
import { Green } from "./styles/Colors";
import { Title } from "./styles/TextStyles";

const ListItem = styled.li`
	list-style: circle;
	margin: 2em 0;
	font-size: 2.5em;
`;

export default ({ project }) => {
	const openModal = e => {
		e.preventDefault();
		// TODO: Code here to set global modal state
	};

	return (
		<ListItem>
			<Title href="/" onClick={openModal} hoverColor={Green}>
				{project.title}
			</Title>
		</ListItem>
	);
};
