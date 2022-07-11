import { useInView, Variants } from 'framer-motion';
import React, { Dispatch, SetStateAction, useRef } from 'react';
import { projects } from '../../assets/data';
import ProjectCard from '../ProjectCard/ProjectCard';
import './MyProjects.scss';
import { motion } from 'framer-motion';
import { uid } from 'uid';
export interface MyProjectsProps {
	setProjectsRef: Dispatch<SetStateAction<null | HTMLDivElement>>;
}

const MyProjects: React.FC<MyProjectsProps> = ({ setProjectsRef }) => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, {
		amount: 'some',
		once: true,
	});
	const parent: Variants = {
		show: {
			transition: {
				staggerChildren: 0.3,
				staggerDirection: 1,
			},
		},
		hidden: {
			transition: {
				staggerDirection: 1,
			},
		},
	};

	return (
		<div className='projects' ref={setProjectsRef}>
			<motion.h4
				className='projects__heading'
				initial={{
					y: -50,
					opacity: 0,
				}}
				animate={
					inView
						? {
								y: 0,
								opacity: 1,
						  }
						: {
								y: -50,
								opacity: 0,
						  }
				}
			>
				My Projects
			</motion.h4>
			<motion.div
				className='projects__cards'
				variants={parent}
				animate={inView ? 'show' : 'hidden'}
				initial={'hidden'}
				ref={ref}
			>
				{projects.map((project) => (
					<ProjectCard {...project} key={uid()} />
				))}
			</motion.div>
		</div>
	);
};

export default MyProjects;
