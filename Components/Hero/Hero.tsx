import React, { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { getEduInfo, urlFor, urlForFile } from '../../utils/utils';
import styles from './Hero.module.scss';
import Image from 'next/image';
import Photo from './../../public/images/photo.webp';
import { Site } from '../../types';
export interface HomeProps {
	setHomeRef: Dispatch<SetStateAction<HTMLElement | null>>;
	site:Site
}

const Home: React.FC<HomeProps> = ({ setHomeRef,site }) => {
	
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
				{site.heroTitle}
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
					{
						site.heroDescription
					}
				</motion.p>
				<motion.a
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
					href={`${urlForFile(site.heroResume)}?dl=Resume.pdf`}
				>
					{site.heroCTA}
				</motion.a>
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
						src={urlFor(site.heroCoverImage).fit("max").url()}
						alt='Heet Vakharia'
						layout='fill'
						priority={true}
						placeholder='blur'
						blurDataURL={urlFor(site.heroCoverImage).fit("max").blur(20).url()}
					/>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Home;
