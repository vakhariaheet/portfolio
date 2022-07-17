import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../Components/Navbar/Navbar';
import styles from '../styles/Home.module.css';
import Hero from '../Components/Hero/Hero';
import MySkills from '../Components/MySkills/MySkills';
import MyProjects from '../Components/MyProjects/MyProjects';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Home: NextPage = () => {
	const [homeRef, setHomeRef] = useState<HTMLElement | null>(null);
	const [projectsRef, setProjectsRef] = useState<HTMLElement | null>(null);
	const [contactRef, setContactRef] = useState<HTMLElement | null>(null);

	return (
		<div>
			<Head>
				<link rel='apple-touch-icon' href='/logo.png' />
				<link rel='icon' href='/logo.png' />
				{/* Meta Tags */}
				{/* Primary Meta Tags */}
				<title>Heet Vakharia: Full Stack Web Developer from India 🇮🇳</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='title'
					content='Heet Vakharia: Full Stack Web Developer from India 🇮🇳'
				/>
				<meta
					name='description'
					content='Hi I am Heet Vakharia,a Full-Stack web developer from India 🇮🇳. I love creating and designing webapps. Currently in love with typescript '
				/>
				{/* Open Graph / Facebook */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://www.heetvakharia.in/' />
				<meta
					property='og:title'
					content='Heet Vakharia: Full Stack Web Developer from India 🇮🇳'
				/>
				<meta
					property='og:description'
					content='Hi I am Heet Vakharia,a Full-Stack web developer from India 🇮🇳. I love creating and designing webapps. Currently in love with typescript '
				/>
				<meta property='og:image' content='https://i.imgur.com/mFqUN5P.png' />
				{/* Twitter */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://www.heetvakharia.in/' />
				<meta
					property='twitter:title'
					content='Heet Vakharia: Full Stack Web Developer from India 🇮🇳'
				/>
				<meta
					property='twitter:description'
					content='Hi I am Heet Vakharia,a Full-Stack web developer from India 🇮🇳. I love creating and designing webapps. Currently in love with typescript '
				/>
				<meta
					property='twitter:image'
					content='https://i.imgur.com/mFqUN5P.png'
				/>
			</Head>
			<Toaster />
			<Navbar
				contactRef={contactRef}
				homeRef={homeRef}
				projectsRef={projectsRef}
			/>
			<main className={styles.main}>
				<Hero setHomeRef={setHomeRef} />
				<MySkills />
				<MyProjects setProjectsRef={setProjectsRef} />
				<Contact setContactRef={setContactRef} />
			</main>

			<Footer />
		</div>
	);
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
export default Home;
