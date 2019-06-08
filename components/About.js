import { useState } from "react";
import Container from "./styles/Container";
import Divider from "./styles/Divider";
import ProjectModal from "./ProjectModal";
import ProjectLink from "./ProjectLink";
import { projects } from "../data/projects";

export default props => {
	const [activeProject, setActiveProject] = useState(null);

	const mappedProjects = projects.map(project => {
		if (projects.indexOf(project) === 0) {
			return (
				<div key={project.title}>
					<Divider />
					<ProjectLink setActiveProject={setActiveProject} project={project} />
				</div>
			);
		} else {
			return (
				<div key={project.title}>
					<Divider>~</Divider>
					<ProjectLink setActiveProject={setActiveProject} project={project} />
				</div>
			);
		}
	});

	const closeModal = () => setActiveProject(null);

	return (
		<Container>
			<h4>some of my projects...</h4>
			{mappedProjects}
			{activeProject && (
				<ProjectModal closeModal={closeModal} project={activeProject} />
			)}
		</Container>
	);
};
