import Logo from "./Logo";
import ScrollingImage from "./ScrollingImage";
import { Purple, Green, Blue } from "./styles/Colors";
import { Title, Link, Text, Bold } from "./styles/TextStyles";

// TODO: create a link that opens a modal with all of the info in it

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
}) => (
	<div>
		{image && <ScrollingImage src={image.src} alt={image.alt} />}
		<Title href={link || repo} target={"_blank"}>
			{title}
		</Title>
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
	</div>
);
