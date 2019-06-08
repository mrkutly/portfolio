import styled from "styled-components";
import ScrollingImage from "./ScrollingImage";
import { Purple, Green, Blue, Black } from "./styles/Colors";
import { ModalTitle, Link, Text, Bold } from "./styles/TextStyles";

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
// TODO: Build modal that has links, info, and scrollable screenshots or maybe a carousel of screenshots

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
}) => {
	const close = e => {
		e.preventDefault();
		// TODO: code here to set global state to remove modal
	};
	return (
		<Outer>
			<Inner>
				<ModalTitle href={link || repo} target={"_blank"}>
					{title}
				</ModalTitle>
				<CloseButton onClick={close} href="">
					X
				</CloseButton>
				{image && <ScrollingImage src={image.src} alt={image.alt} />}
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
			</Inner>
		</Outer>
	);
};
