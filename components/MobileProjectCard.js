import { useContext } from "react";
import { DarkModeContext } from "../hooks/DarkModeContext";
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

function mappedRepos({ frontend, backend }, darkMode) {
	return (
		<React.Fragment>
			<LinkText>
				<Link
					href={frontend}
					target="_blank"
					hoverColor={Blue}
					darkMode={darkMode}
				>
					Frontend
				</Link>
			</LinkText>
			<LinkText>
				<Link
					href={backend}
					target="_blank"
					hoverColor={Blue}
					darkMode={darkMode}
				>
					Backend
				</Link>
			</LinkText>
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

export default ({
	project: { title, link, repo, description, tech, image },
}) => {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div>
			<MobileTitle darkMode={darkMode}>{title}</MobileTitle>
			<Text>{description}</Text>
			<Text>
				<Bold textColor={Purple}>Tech</Bold> - {tech}
			</Text>
			<LinksBox>
				{link && repo ? (
					<React.Fragment>
						<LinkText>
							<Link
								href={link}
								target="_blank"
								hoverColor={Green}
								darkMode={darkMode}
							>
								Live
							</Link>
						</LinkText>
						{repoSwitch(repo, darkMode)}
					</React.Fragment>
				) : repo ? (
					<LinkText>{repoSwitch(repo, darkMode)}</LinkText>
				) : link ? (
					<LinkText>
						<Link
							href={link}
							target="_blank"
							hoverColor={Green}
							darkMode={darkMode}
						>
							Live
						</Link>
					</LinkText>
				) : null}
			</LinksBox>
		</div>
	);
};
