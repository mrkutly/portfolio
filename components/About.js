import { useState, useEffect } from "react";
import Container from "./styles/Container";
import Divider from "./styles/Divider";
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";

export default props => {
	const [activeProject, setActiveProject] = useState(null);
	const [isMobileLayout, setIsMobileLayout] = useState(null);

	useEffect(() => {
		// this tells the component whether or not to render the mobile layout
		setIsMobileLayout(window.innerWidth <= 1000);

		function createHandleResize(wait) {
			let time = Date.now();

			return function(e) {
				if (time + wait - Date.now() < 0) {
					if (
						(!isMobileLayout && window.innerWidth <= 1000) ||
						(isMobileLayout && window.innerWidth > 1000)
					) {
						setIsMobileLayout(window.innerWidth);
					}

					time = Date.now();
				}
			};
		}

		const handleResize = createHandleResize(100);
		window.addEventListener("resize", handleResize);

		return function() {
			window.removeEventListener("resize", handleResize);
		};
	});

	const mappedProjects = projects.map(project => {
		if (projects.indexOf(project) === projects.length - 1) {
			return (
				<div key={project.title}>
					<Divider>~</Divider>
					{
						<Project
							mobile={isMobileLayout}
							setActiveProject={setActiveProject}
							project={project}
						/>
					}
					<Divider>~</Divider>
				</div>
			);
		} else {
			return (
				<div key={project.title}>
					<Divider>~</Divider>
					<Project
						mobile={isMobileLayout}
						setActiveProject={setActiveProject}
						project={project}
					/>
				</div>
			);
		}
	});

	const closeModal = () => setActiveProject(null);

	return (
		<Container>
			<h4>some things i built</h4>
			{mappedProjects}
			{activeProject && (
				<ProjectModal closeModal={closeModal} project={activeProject} />
			)}
		</Container>
	);
};
