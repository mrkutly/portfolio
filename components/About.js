import Container from "./styles/Container";
import Divider from "./styles/Divider";
import ProjectModal from "./ProjectModal";
import ProjectLink from "./ProjectLink";
import { projects } from "../data/projects";

const mappedProjects = projects.map(project => {
	if (projects.indexOf(project) === 0) {
		return (
			<div key={project.title}>
				<Divider />
				<ProjectLink project={project} />
			</div>
		);
	} else {
		return (
			<div key={project.title}>
				<Divider>~</Divider>
				<ProjectLink project={project} />
			</div>
		);
	}
});

export default () => {
	return (
		<Container>
			<h4>some of my projects...</h4>
			{mappedProjects}
			{/* {project && <ProjectModal project={project} />} */}
		</Container>
	);
};
