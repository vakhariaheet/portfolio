import React from 'react';
import { scrollTo } from '../../utils/utils';
import { motion, Variants } from 'framer-motion';
import styles from './Navbar.module.scss';
export interface NavbarProps {
	homeRef: HTMLElement | null;
	projectsRef: HTMLElement | null;
	contactRef: HTMLElement | null;
}
const Navbar: React.FC<NavbarProps> = ({
	contactRef,
	homeRef,
	projectsRef,
}) => {
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
	const link: Variants = {
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
		<motion.nav
			variants={parent}
			initial={'hidden'}
			animate={'show'}
			className={styles.nav}
		>
			<motion.li
				tabIndex={1}
				onClick={(event) => {
					scrollTo({ ele: homeRef, event, eventType: 'pointer' });
					setTimeout(() => {
						(event.target as any).blur();
					}, 3000);
				}}
				onKeyDown={(event) => {
					scrollTo({ ele: homeRef, event, eventType: 'key' });
					setTimeout(() => {
						(event.target as any).blur();
					}, 3000);
				}}
				variants={link}
				className={styles.link}
			>
				Home
			</motion.li>
			<motion.li
				tabIndex={2}
				onClick={(event) => {
					scrollTo({ ele: projectsRef, event, eventType: 'pointer' });
					setTimeout(() => {
						(event.target as HTMLInputElement).blur();
					}, 3000);
				}}
				onKeyDown={(event) => {
					scrollTo({ ele: projectsRef, event, eventType: 'key' });
					setTimeout(() => {
						(event.target as any).blur();
					}, 3000);
				}}
				variants={link}
				className={styles.link}
			>
				Projects
			</motion.li>
			<motion.li
				tabIndex={3}
				onClick={(event) => {
					scrollTo({ ele: contactRef, event, eventType: 'pointer' });
					setTimeout(() => {
						(event.target as any).blur();
					}, 3000);
				}}
				onKeyDown={(event) => {
					scrollTo({ ele: contactRef, event, eventType: 'key' });
					setTimeout(() => {
						(event.target as any).blur();
					}, 3000);
				}}
				variants={link}
				className={styles.link}
			>
				Contact
			</motion.li>
		</motion.nav>
	);
};

export default Navbar;
