import React, { Dispatch, SetStateAction } from 'react';
import { projects } from '../../assets/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import './MyProjects.scss';

export interface MyProjectsProps {
	setProjectsRef: Dispatch<SetStateAction<null | HTMLDivElement>>;
}

const MyProjects: React.FC<MyProjectsProps> = ({ setProjectsRef }) => {
	return (
		<div className='projects' ref={setProjectsRef}>
			<h4 className='projects__heading'>My Projects</h4>
			<div className='projects__cards'>
				{projects.map((project) => (
					<ProjectCard {...project} />
				))}
			</div>
		</div>
	);
};

export default MyProjects;
