import styled from "styled-components";
import { Purple, Green, Blue } from "./styles/Colors";
import { Title, Link, Text, Bold } from "./styles/TextStyles";
const Card = styled.div``;

// TODO: Add screenshots

export default ({ project }) => (
	<Card>
		<Title href={project.link || project.repo} target={"_blank"}>
			{project.title}
		</Title>
		<Text>{project.description}</Text>
		<Text>
			<Bold textColor={Purple}>Tech</Bold> - {project.tech}
		</Text>
		{project.link && project.repo ? (
			<Text>
				<Link href={project.link} target="_blank" hoverColor={Green}>
					Live
				</Link>{" "}
				|{" "}
				<Link href={project.repo} target="_blank" hoverColor={Blue}>
					Github
				</Link>
			</Text>
		) : project.repo ? (
			<Text>
				<Link href={project.repo} target="_blank" hoverColor={Blue}>
					Github
				</Link>
			</Text>
		) : project.link ? (
			<Text>
				<Link href={project.link} target="_blank" hoverColor={Green}>
					Live
				</Link>
			</Text>
		) : null}
	</Card>
);
