import { Project, Skill } from '../types';

export const projects: Project[] = [
	{
		name: 'Covid Tracker',
		description:
			'Covid tracker shows you global covid stats and country-specific covid stats with graphs and maps. It is a PWA made using react, typescript, Mapbox, chartjs and powered by disease.sh covid API',
		githubURL: 'https://github.com/vakhariaheet/NotAnOrdinaryCovidTracker',
		url: 'https://covidtracker.heetvakharia.in',
		image: '/images/covidtracker.webp',
		tags: ['React JS', 'Typescript', 'PWA'],
	},
	{
		name: 'Verifier JS',
		description:
			'Verifierjs is a npm package which makes string validation very easy. It provides ready made function as well as building block function for customization.It has more than 2.2k+ downloads',
		githubURL: 'https://github.com/vakhariaheet/verifierjs',
		url: 'https://npmjs.org/verifierjs',
		tags: ['NPM', 'Typescript', 'JEST'],
		image: '/images/verifier.webp',
	},
	{
		name: 'Face Recognition App',
		description:
			'A face recognition app which recognises faces in the provided image(URL). It also has dark mode and light mode changing ability. It is made using VueJs and powered by faceplusplus API',
		githubURL: 'https://github.com/vakhariaheet/face-recognition-app',
		image: '/images/facerecog.webp',
		tags: ['Vue JS'],
		url: 'https://facerecognition.heetvakharia.in/',
	},
	{
		name: 'Codepen Clone',
		description:
			'Clone of Popular online code editor i.e. CodePen. It has features like syntax highlighting, code autocomple,emmet,code folding etc.It is made in firebase, reactjs',
		githubURL: 'https://github.com/vakhariaheet/codepen-clone',
		tags: ['Firebase', 'React JS', 'GSAP'],
		url: 'https://codepen.heetvakharia.in',
		image: '/images/codepen.webp',
	},
	{
		name: 'Covid India REST API',
		description:
			'Covid India API gives covid19 stats of India and the Indian States. It web scrapes data from MoHFW, Government of India web site.It made using typescript,jsdom and expressjs.',
		githubURL: 'https://github.com/vakhariaheet/covidapi',
		tags: ['Express JS', 'JS DOM', 'Typescript'],
		url: 'https://rapidapi.com/heetkv/api/covid-india2/',
		image: '/images/covidapi.webp',
	},
	{
		name: 'Custom JS Console (NPM Package)',
		description:
			'Custom JS Console is npm package which lets user make custom console just like popular code editing sites like Codepen, Codesandbox etc. It is made using typescript',
		githubURL: 'https://github.com/vakhariaheet/custom-js-console',
		tags: ['NPM', 'JEST', 'Typescript'],
		url: 'https://npmjs.org/custom-js-console',
		image: '/images/console.webp',
	},
];
export const skills: Skill[] = [
	{
		type: 'frontend',
		name: 'HTML',
	},
	{
		type: 'frontend',
		name: 'CSS',
	},
	{
		type: 'backend',
		name: 'ExpressJS',
	},
	{
		type: 'frontend',
		name: 'JavaScript',
	},
	{
		type: 'backend',
		name: 'NodeJS',
	},
	{
		type: 'frontend',
		name: 'SCSS',
	},
	{
		type: 'frontend',
		name: 'HTML',
	},
	{
		type: 'frontend',
		name: 'HTML',
	},
	{
		name: 'Web Designing',
	},
	{
		type: 'frontend',
		name: 'TypeScript',
	},
	{
		name: 'PuppeteerJS(Web Scrapping)',
	},
	{
		type: 'backend',
		name: 'MySQL',
	},
	{
		type: 'frontend',
		name: 'PWA',
	},
	{
		type: 'backend',
		name: 'MongoDB',
	},
	{
		type: 'frontend',
		name: 'React JS',
	},
	{
		name: 'JEST',
	},
];
