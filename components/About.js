import { useState } from "react";
import Container from "./styles/Container";
import Divider from "./styles/Divider";
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";

export default props => {
	const [activeProject, setActiveProject] = useState(null);

	const mappedProjects = projects.map(project => {
		if (projects.indexOf(project) === projects.length - 1) {
			return (
				<div key={project.title}>
					<Divider>~</Divider>
					{<Project setActiveProject={setActiveProject} project={project} />}
					<Divider>~</Divider>
				</div>
			);
		} else {
			return (
				<div key={project.title}>
					<Divider>~</Divider>
					<Project setActiveProject={setActiveProject} project={project} />
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
