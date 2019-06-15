import { useState, useEffect } from "react";
import ProjectLink from "./ProjectLink";
import MobileProjectCard from "./MobileProjectCard";

export default props => {
	const { mobile, setActiveProject, project } = props;

	return (
		<>
			{mobile ? (
				<MobileProjectCard project={project} />
			) : (
				<ProjectLink setActiveProject={setActiveProject} project={project} />
			)}
		</>
	);
};
