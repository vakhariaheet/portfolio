import { useInView, Variants } from 'framer-motion';
import { GetStaticProps } from 'next';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { uid } from 'uid';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './MyProjects.module.scss';
import { Project, Site } from '../../types';
export interface MyProjectsProps {
	setProjectsRef: Dispatch<SetStateAction<null | HTMLElement>>;
	projects: Project[];
	site:Site
}

const MyProjects: React.FC<MyProjectsProps> = ({
	setProjectsRef,
	projects,
	site
}) => {
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
		<section className={styles.projects} ref={setProjectsRef}>
			<motion.h4
				className={styles.projects__heading}
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
				{site.projectsTitle}
			</motion.h4>
			<motion.div
				className={styles.projects__cards}
				variants={parent}
				animate={inView ? 'show' : 'hidden'}
				initial={'hidden'}
				ref={ref}
			>
				{projects.map((project) => (
					<ProjectCard project={project} key={uid()} />
				))}
			</motion.div>
		</section>
	);
};

export default MyProjects;
