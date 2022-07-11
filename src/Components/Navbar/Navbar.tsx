import React, { useRef } from 'react';
import { scrollTo } from '../../utils/utils';
import { motion, Variants } from 'framer-motion';
import './Navbar.scss';
export interface NavbarProps {
	homeRef: HTMLDivElement | null;
	projectsRef: HTMLDivElement | null;
	contactRef: HTMLDivElement | null;
}
const Navbar: React.FC<NavbarProps> = ({
	contactRef,
	homeRef,
	projectsRef,
}) => {
	const ref = useRef<HTMLDivElement>(null);

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
		<motion.nav variants={parent} initial={'hidden'} animate={'show'}>
			<motion.li
				tabIndex={1}
				onPointerDown={(event) => {
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
			>
				Home
			</motion.li>
			<motion.li
				tabIndex={2}
				onPointerDown={(event) => {
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
			>
				Projects
			</motion.li>
			<motion.li
				tabIndex={3}
				onPointerDown={(event) => {
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
			>
				Contact
			</motion.li>
		</motion.nav>
	);
};

export default Navbar;
