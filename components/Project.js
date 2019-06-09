import React from "react";
import ProjectLink from "./ProjectLink";
import MobileProjectCard from "./MobileProjectCard";

export default class Project extends React.Component {
	state = {
		width: null,
	};

	componentDidMount() {
		this.setState({ width: window.innerWidth });
	}

	render() {
		const { setActiveProject, project } = this.props;
		const mobileLayout = this.state.width <= 1000;

		return (
			<>
				{mobileLayout ? (
					<MobileProjectCard project={project} />
				) : (
					<ProjectLink setActiveProject={setActiveProject} project={project} />
				)}
			</>
		);
	}
}
