import { useEffect, useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../hooks/DarkModeContext";
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
	background-color: ${props => (props.darkMode ? "#111" : "white")};
	width: 60vw;
	margin: auto;
	max-height: 70vh;
	overflow: hidden;
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
	grid-template-rows: 2fr 1fr 1fr 1fr 1fr;
`;

const Column = styled.div`
	margin: 0 1em;
`;

const CloseButton = styled.a`
	float: right;
	font-size: 2em;
	text-decoration: none;
	color: ${props => (props.darkMode ? "#cfcfcf" : Black)};

	&:hover {
		color: ${Blue};
	}
`;

function mappedRepos({ frontend, backend }, darkMode) {
	return (
		<React.Fragment>
			<Link
				href={frontend}
				target="_blank"
				hoverColor={Blue}
				darkMode={darkMode}
			>
				Frontend
			</Link>{" "}
			|{" "}
			<Link
				href={backend}
				target="_blank"
				hoverColor={Blue}
				darkMode={darkMode}
			>
				Backend
			</Link>
		</React.Fragment>
	);
}

function repoSwitch(repo, darkMode) {
	if (typeof repo === "object") {
		return mappedRepos(repo, darkMode);
	}

	return (
		<Link href={repo} target="_blank" hoverColor={Blue} darkMode={darkMode}>
			Github
		</Link>
	);
}

export default props => {
	const { darkMode } = useContext(DarkModeContext);
	const {
		project: { title, link, repo, description, tech, image },
		closeModal,
	} = props;

	const handleClose = e => {
		e.preventDefault();
		props.closeModal();
	};

	const handleOutsideClick = e => {
		if (!e.target.className.includes("Outer")) return;
		props.closeModal();
	};

	useEffect(() => {
		function handleKeyDown(e) {
			if (e.key === "Escape") {
				props.closeModal();
			}
		}
		document.addEventListener("keydown", handleKeyDown);

		return function cleanUp() {
			document.removeEventListener("keydown", handleKeyDown);
		};
	});

	return (
		<Outer onClick={handleOutsideClick}>
			<Inner darkMode={darkMode}>
				<CloseButton onClick={handleClose} href="">
					~~X~~
				</CloseButton>
				<Grid columns={image ? 2 : 1}>
					<Column>
						<SubGrid columns={1}>
							<ModalTitle
								darkMode={darkMode}
								href={link || repo}
								target={"_blank"}
							>
								{title}
							</ModalTitle>

							<Text>{description}</Text>

							<Text>
								<Bold textColor={Purple}>Tech</Bold> - {tech}
							</Text>

							{link && repo ? (
								<Text>
									<Link
										darkMode={darkMode}
										href={link}
										target="_blank"
										hoverColor={Green}
									>
										Live
									</Link>{" "}
									| {repoSwitch(repo, darkMode)}
								</Text>
							) : repo ? (
								<Text>{repoSwitch(repo, darkMode)}</Text>
							) : link ? (
								<Text>
									<Link
										darkMode={darkMode}
										href={link}
										target="_blank"
										hoverColor={Green}
									>
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
};
