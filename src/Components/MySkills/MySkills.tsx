import React, { useRef } from 'react';
import './MySkills.scss';
import { skills } from '../../assets/data';
import { motion, useInView, Variants } from 'framer-motion';
import { uid } from 'uid';
export interface MySkillsProps {}

const MySkills: React.FC<MySkillsProps> = () => {
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
		<motion.div className='skills__container' ref={ref}>
			<motion.h4
				className='skills__heading'
				variants={tag}
				animate={inView ? 'show' : 'hidden'}
				initial={'hidden'}
			>
				My Skills
			</motion.h4>
			<motion.div
				className='skills'
				variants={parent}
				initial='hidden'
				animate={inView ? 'show' : 'hidden'}
			>
				{skills.map((skill, index) => (
					<motion.div
						className={`skill ${skill.type}`}
						variants={tag}
						key={uid()}
					>
						{skill.name}
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default MySkills;
