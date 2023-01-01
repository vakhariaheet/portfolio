import React, { useRef } from 'react';
import styles from './MySkills.module.scss';
import { skills } from '../../data/data';
import { motion, useInView, Variants } from 'framer-motion';
import { uid } from 'uid';
import { Site } from '../../types';
export interface MySkillsProps {
	site:Site
}

const MySkills: React.FC<MySkillsProps> = ({site}) => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, {
		amount: 'some',
		once: true,
	});
	const parent: Variants = {
		show: {
			transition: {
				staggerChildren: 0.1,
				staggerDirection: 1,
			},
		},
		hidden: {
			transition: {
				staggerDirection: 1,
			},
		},
	};
	const tag: Variants = {
		show: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.4,
			},
		},
		hidden: {
			y: -50,
			opacity: 0,
		},
	};
	return (
		<motion.section className={styles.skills__container} ref={ref}>
			<motion.h4
				className={styles.skills__heading}
				variants={tag}
				animate={inView ? 'show' : 'hidden'}
				initial={'hidden'}
			>
				{site.skillsTitle}
			</motion.h4>
			<motion.div
				className={styles.skills}
				variants={parent}
				initial='hidden'
				animate={inView ? 'show' : 'hidden'}
			>
				{site.heroTags.map((skill, index) => (
					<motion.div
						className={`${styles.skill} ${
							skill.tagName ? styles[skill.tagType] : ''
						}`}
						variants={tag}
						key={uid()}
					>
						{skill.tagName}
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
};

export default MySkills;
