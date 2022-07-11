import React from 'react';
import './MySkills.scss';

export interface MySkillsProps {}

const MySkills: React.FC<MySkillsProps> = () => {
	return (
		<div className='skills__container'>
			<h4 className='skills__heading'>My Skills</h4>
			<div className='skills'>
				<span className='skill frontend'>HTML</span>
				<span className='skill frontend'>CSS</span>
				<span className='skill backend'>ExpressJS</span>
				<span className='skill frontend'>JavaScript</span>
				<span className='skill backend'>NodeJS</span>
				<span className='skill frontend'>SCSS</span>
				<span className='skill general'>Web Designing</span>
				<span className='skill frontend'>TypeScript</span>
				<span className='skill backend'>PuppeteerJS(Web Scrapping)</span>
				<span className='skill backend'>MySQL</span>
				<span className='skill frontend'>PWA</span>
				<span className='skill backend'>MongoDB</span>
				<span className='skill frontend'>React JS</span>
				<span className='skill'>JEST</span>
			</div>
		</div>
	);
};

export default MySkills;
