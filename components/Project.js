import { useState, useEffect } from "react";
import ProjectLink from "./ProjectLink";
import MobileProjectCard from "./MobileProjectCard";

export default props => {
	const [width, setWidth] = useState(null);

	useEffect(() => {
		setWidth(window.innerWidth);
		// some code here to create the event listener

		// some HOF to debounce it

		// add it to the window

		// return a function to remove it
	});

	const { setActiveProject, project } = props;
	const mobileLayout = width <= 1000;

	return (
		<>
			{mobileLayout ? (
				<MobileProjectCard project={project} />
			) : (
				<ProjectLink setActiveProject={setActiveProject} project={project} />
			)}
		</>
	);
};
