import React from 'react';
import './ProjectCard.scss';
import GithubLogo from '../../assets/images/github.png';
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
	return (
		<div className='card'>
			<div className='card__image'>
				<img src={image} alt='' />
			</div>
			<div className='card__content'>
				<h4 className='card__project--name'>{name}</h4>
				<p className='card__project--description'>{description}</p>
				<div className='card__project--extrainfo'>
					<div className='card__project--tags'>
						{tags.map((tag, index) => (
							<span key={index} className='card__project--tag'>
								{tag}
							</span>
						))}
					</div>
					<div className='card__project--links'>
						<div className='card__project--github'>
							<img
								src={GithubLogo}
								alt='repository link'
								onClick={() => window.open(githubURL)}
								tabIndex={0}
							/>
						</div>
						<div className='card__project--link'>
							<span
								className='material-symbols-outlined'
								onClick={() => window.open(url)}
								tabIndex={0}
							>
								open_in_new
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
