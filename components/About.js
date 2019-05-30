import styled from "styled-components";
import Container from "./styles/Container";
import Divider from "./styles/Divider";
import ProjectCard from "./ProjectCard";

const projects = [
	{
		title: "Taboola React Native Plugin Example App",
		description:
			"An example application to show Taboola clients the best practices for implementing the Taboola React Native plugin",
		tech: "React-Native | styled-components",
		// TODO: Make sure this repo link is correct
		repo: "https://www.github.com/taboola/taboola-react-native-example",
		link: null,
	},
	{
		title: "SYFY Taboola Feed",
		description:
			"A custom feed of SYFY content and ads placed at the bottom of SYFY Wire's articles",
		tech: "JS | XML Web Crawler | CSS",
		repo: null,
		// TODO: Get real live page
		link: "https://www.syfy.com",
	},
	{
		title: "CNBC Make It Taboola Feed",
		description:
			"A custom feed of CNBC Make It content and ads placed at the bottom of SYFY Wire's articles",
		tech: "JS | XML Web Crawler | XML recommendation algorithm rankers | CSS",
		repo: null,
		// TODO: Get real live page
		link: "https://www.syfy.com",
	},
	{
		title: "Mantra Percussion Site",
		description: "Website for the band Mantra Percussion",
		tech: "React | styled-components | Express | MongoDB",
		// TODO: Get full repo link
		repo: "https://www.github.com/mrkutly/",
		link: "https://mantra-frontend.herokuapp.com",
	},
];

const mappedProjects = projects.map(project => {
	if (projects.indexOf(project) === 0) {
		return (
			<div key={project.title}>
				<Divider />
				<ProjectCard project={project} />
			</div>
		);
	} else {
		return (
			<div key={project.title}>
				<Divider>~</Divider>
				<ProjectCard project={project} />
			</div>
		);
	}
});

// TODO: Add screenshots to project cards

const CardGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-gap: 0;
	}
`;

export default () => (
	<Container>
		<h4>some of my projects...</h4>
		<CardGrid>{mappedProjects}</CardGrid>
	</Container>
);
