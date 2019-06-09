import styled from "styled-components";
import { Purple, Green, Blue } from "./styles/Colors";
import { MobileTitle, Link, Text, Bold } from "./styles/TextStyles";

const LinksBox = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	margin-top: 3.5em;
`;

const LinkText = styled.span`
	place-self: start;
	font-size: 1.8em;
`;

function mappedRepos({ frontend, backend }) {
	return (
		<React.Fragment>
			<LinkText>
				<Link href={frontend} target="_blank" hoverColor={Blue}>
					Frontend
				</Link>
			</LinkText>
			<LinkText>
				<Link href={backend} target="_blank" hoverColor={Blue}>
					Backend
				</Link>
			</LinkText>
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
		<MobileTitle>{title}</MobileTitle>
		<Text>{description}</Text>
		<Text>
			<Bold textColor={Purple}>Tech</Bold> - {tech}
		</Text>
		<LinksBox>
			{link && repo ? (
				<React.Fragment>
					<LinkText>
						<Link href={link} target="_blank" hoverColor={Green}>
							Live
						</Link>
					</LinkText>
					{repoSwitch(repo)}
				</React.Fragment>
			) : repo ? (
				<LinkText>{repoSwitch(repo)}</LinkText>
			) : link ? (
				<LinkText>
					<Link href={link} target="_blank" hoverColor={Green}>
						Live
					</Link>
				</LinkText>
			) : null}
		</LinksBox>
	</div>
);
