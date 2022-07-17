import React, { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { getEduInfo } from '../../utils/utils';
import styles from './Hero.module.scss';
import Image from 'next/image';
import Photo from './../../public/images/photo.webp';
export interface HomeProps {
	setHomeRef: Dispatch<SetStateAction<HTMLElement | null>>;
}

const Home: React.FC<HomeProps> = ({ setHomeRef }) => {
	const onResumeDownload = async () => {
		const blob = await fetch('/resume.pdf').then((resp) => resp.blob());
		const anchor = document.createElement('a');
		const url = URL.createObjectURL(blob);
		anchor.href = url;
		anchor.download = 'resume.pdf';
		anchor.click();
		anchor.remove();
		URL.revokeObjectURL(url);
	};
	return (
		<motion.section className={styles.home} ref={setHomeRef}>
			<div className={styles.home__content}>
				<motion.h1
					initial={{
						y: -100,
						opacity: 0,
						scale: 0.8,
					}}
					animate={{ y: 0, scale: 1, opacity: 1 }}
					transition={{
						delay: 0.2,
						type: 'spring',
						damping: 10,
						stiffness: 100,
						duration: 0.3,
					}}
					className={styles.home__heading}
				>
					Hi, I am Heet Vakharia
				</motion.h1>
				<motion.p
					className={styles.home__about}
					initial={{
						x: -100,
						opacity: 0,
						scale: 0.8,
					}}
					animate={{ x: 0, scale: 1, opacity: 1 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						bounce: 0.4,
						type: 'spring',
					}}
				>
					I am a passionate Full-Stack web developer based in India 🇮🇳. I love
					creating and designing web apps in typescript. In my free time, I read
					books and Harry Potter Fanfiction. I am currently doing my{' '}
					{getEduInfo().degree} in Information Technology from GLS University (
					{getEduInfo().year} year)
				</motion.p>
				<motion.button
					initial={{
						y: -50,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
						transition: {
							duration: 0.4,
						},
					}}
					className={styles.home__cta}
					onPointerDown={onResumeDownload}
				>
					Download Resume
				</motion.button>
			</div>
			<div className={styles.home__image}>
				<motion.div
					className={styles.img}
					initial={{
						opacity: 0,
						scale: 0.8,
					}}
					animate={{ scale: 1, opacity: 1 }}
					transition={{
						delay: 0.3,
						type: 'spring',
						damping: 10,
						stiffness: 100,
					}}
				>
					<Image
						src={Photo}
						alt='Heet Vakharia'
						layout='fill'
						priority={true}
						placeholder='blur'
					/>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Home;
