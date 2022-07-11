import { Project } from '../types';

export const projects: Project[] = [
	{
		name: 'Covid Tracker',
		description:
			'A covid tracker shows you global covid stats and country-specific covid stats with graphs and maps. It is a PWA made using react, typescript, Mapbox, chartjs and disease.sh covid API',
		githubURL: 'https://github.com/vakhariaheet/NotAnOrdinaryCovidTracker',
		url: 'https://covidtracker.heetvakharia.in',
		image:
			'https://raw.githubusercontent.com/vakhariaheet/NotAnOrdinaryCovidTracker/master/public/images/preview.png',
		tags: ['React JS', 'Typescript', 'PWA'],
	},
	{
		name: 'Verifier JS',
		description:
			'Verifierjs is a npm package which makes string validation very easy. It provides read made function as well as building block function for customization.It has more than 2.2k+ downloads',
		githubURL: 'https://github.com/vakhariaheet/verifierjs',
		url: 'https://npmjs.org/verifierjs',
		tags: ['NPM', 'Typescript', 'JEST'],
		image: 'https://i.imgur.com/ygryF9u.png',
	},
	{
		name: 'Face Recognition App',
		description:
			'A face recognition app which recognises faces in the provided image(URL). It also has dark mode and light mode changing ability. It is made using VueJs and faceplusplus API',
		githubURL: 'https://github.com/vakhariaheet/face-recognition-app',
		image:
			'https://github.com/vakhariaheet/face-recognition-app/blob/6071cbc51b20d74949559190cec9e1f23c50f85c/public/preview.png?raw=true',
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
		image: 'https://i.imgur.com/JnemTAN.png',
	},
	{
		name: 'Covid India',
		description:
			'Covid India gives covid19 stats of India and the Indian States. It web scrapes MoHFW, Government of India web site.It made using typescript,jsdom and expressjs.',
		githubURL: 'https://github.com/vakhariaheet/covidapi',
		tags: ['Express JS', 'JS DOM', 'Typescript'],
		url: 'https://rapidapi.com/heetkv/api/covid-india2/',
		image: 'https://i.imgur.com/nJXS4Ib.png',
	},
	{
		name: 'Custom Console (NPM Package)',
		description:
			'Custom JS Console is npm package which lets user custom console just like popular code editing sites like Codepen, Codesandbox etc. It is made using typescript',
		githubURL: 'https://github.com/vakhariaheet/custom-js-console',
		tags: ['NPM', 'JEST', 'Typescript'],
		url: 'https://npmjs.org/custom-js-console',
		image: 'https://i.imgur.com/FMMIGeG.png',
	},
];
