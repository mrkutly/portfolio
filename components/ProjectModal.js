import React from "react";
import styled from "styled-components";
import ScrollingImage from "./ScrollingImage";
import { Purple, Green, Blue, Black } from "./styles/Colors";
import { ModalTitle, Link, Text, Bold } from "./styles/TextStyles";

const Outer = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	display: grid;
	top: 0;
	left: 0;
	z-index: 1;
	background-color: hsla(0, 0%, 0%, 0.5);
`;

const Inner = styled.div`
	background-color: white;
	width: 60vw;
	margin: auto;
	max-height: 70vh;
	overflow: scroll;
	z-index: 2;
	padding: 5em;
	border: 2px solid ${Purple};
	font-size: 1.1em;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: ${props => (props.columns === 2 ? "1fr 2fr" : "1fr")};
`;

const SubGrid = styled.div`
	display: grid;
	grid-template-rows: one 2fr two 1fr three 1fr four 1fr five 1fr;
`;

const Column = styled.div`
	margin: 0 1em;
`;

const CloseButton = styled.a`
	float: right;
	font-size: 2em;
	text-decoration: none;
	color: ${Black};

	&:hover {
		color: ${Blue};
	}
`;

function mappedRepos({ frontend, backend }) {
	return (
		<React.Fragment>
			<Link href={frontend} target="_blank" hoverColor={Blue}>
				Frontend
			</Link>{" "}
			|{" "}
			<Link href={backend} target="_blank" hoverColor={Blue}>
				Backend
			</Link>
		</React.Fragment>
	);
}

function repoSwitch(repo) {
	if (typeof repo === "object") {
		return mappedRepos(repo);
	}

	return (
		<Link href={repo} target="_blank" hoverColor={Blue}>
			Github
		</Link>
	);
}

export default class ProjectModal extends React.Component {
	handleClose = e => {
		e.preventDefault();
		this.props.closeModal();
	};

	handleOutsideClick = e => {
		if (!e.target.className.includes("Outer")) return;
		this.props.closeModal();
	};

	handleKeyDown = e => {
		if (e.key === "Escape") {
			this.props.closeModal();
		}
	};

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown);
	}

	render() {
		const {
			project: { title, link, repo, description, tech, image },
			closeModal,
		} = this.props;
		return (
			<Outer onClick={this.handleOutsideClick}>
				<Inner>
					<CloseButton onClick={this.handleClose} href="">
						~~X~~
					</CloseButton>
					<Grid columns={image ? 2 : 1}>
						<Column>
							<SubGrid columns={1}>
								<ModalTitle href={link || repo} target={"_blank"}>
									{title}
								</ModalTitle>

								<Text>{description}</Text>

								<Text>
									<Bold textColor={Purple}>Tech</Bold> - {tech}
								</Text>

								{link && repo ? (
									<Text>
										<Link href={link} target="_blank" hoverColor={Green}>
											Live
										</Link>{" "}
										| {repoSwitch(repo)}
									</Text>
								) : repo ? (
									<Text>{repoSwitch(repo)}</Text>
								) : link ? (
									<Text>
										<Link href={link} target="_blank" hoverColor={Green}>
											Live
										</Link>
									</Text>
								) : null}
							</SubGrid>
						</Column>
						{image && (
							<Column>
								<ScrollingImage src={image.src} alt={image.alt} />
							</Column>
						)}
					</Grid>
				</Inner>
			</Outer>
		);
	}
}
