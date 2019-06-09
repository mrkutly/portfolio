import styled from "styled-components";
import ScrollingImage from "./ScrollingImage";
import { Purple, Green, Blue, Black } from "./styles/Colors";
import { ModalTitle, Link, Text, Bold } from "./styles/TextStyles";

// TODO: add escape keypress to close modal

const Outer = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	background-color: hsla(0, 0%, 0%, 0.5);
`;

const Inner = styled.div`
	background-color: white;
	width: 70vw;
	margin: 5vh auto;
	max-height: 80vh;
	overflow: scroll;
	z-index: 2;
	padding: 5em;
	border: 2px solid ${Purple};
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: ${props => (props.columns === 2 ? "1fr 2fr" : "1fr")};
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

export default ({
	project: { title, link, repo, description, tech, image },
	closeModal,
}) => {
	const handleClose = e => {
		e.preventDefault();
		closeModal();
	};

	const handleOutsideClick = e => {
		if (!e.target.className.includes("Outer")) return;
		closeModal();
	};

	return (
		<Outer onClick={handleOutsideClick}>
			<Inner>
				<CloseButton onClick={handleClose} href="">
					~~X~~
				</CloseButton>
				<Grid columns={image ? 2 : 1}>
					<Column>
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
