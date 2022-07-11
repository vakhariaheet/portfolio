import React from 'react';
import './ProjectCard.scss';
import GithubLogo from '../../assets/images/github.png';
import { Variants, motion } from 'framer-motion';
import { uid } from 'uid';
export interface ProjectCardProps {
	image: string;
	name: string;
	githubURL: string;
	url: string;
	description: string;
	tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	description,
	githubURL,
	image,
	name,
	url,
	tags,
}) => {
	const card: Variants = {
		show: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.4,
			},
		},
		hidden: {
			x: -50,
			opacity: 0,
		},
	};
	return (
		<motion.div className='card' variants={card} key={uid()}>
			<div className='card__image' key={uid()}>
				<img src={image} alt='' key={uid()} />
			</div>
			<div className='card__content' key={uid()}>
				<h4 className='card__project--name' key={uid()}>
					{name}
				</h4>
				<p className='card__project--description' key={uid()}>
					{description}
				</p>
				<div className='card__project--extrainfo' key={uid()}>
					<div className='card__project--tags' key={uid()}>
						{tags.map((tag) => (
							<span className='card__project--tag' key={uid()}>
								{tag}
							</span>
						))}
					</div>
					<div className='card__project--links' key={uid()}>
						<div className='card__project--github' key={uid()}>
							<img
								src={GithubLogo}
								alt='repository link'
								onClick={() => window.open(githubURL)}
								tabIndex={0}
								key={uid()}
							/>
						</div>
						<div className='card__project--link' key={uid()}>
							<span
								className='material-symbols-outlined'
								onClick={() => window.open(url)}
								tabIndex={0}
								key={uid()}
							>
								open_in_new
							</span>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
