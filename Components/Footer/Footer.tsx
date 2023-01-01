import React from 'react';
import { Site } from '../../types';
import styles from './Footer.module.scss';
export interface FooterProps {
	site: Site;
}

const Footer: React.FC<FooterProps> = ({site}) => {
	const mantra = site.footerSholaks[ Math.floor(Math.random() * site.footerSholaks.length) ];
	return (
		<footer className={styles.footer}>
			<abbr title={mantra.translation}>
				{
					mantra.sholak.map((sholak, index) => (
						<p key={index} className={styles.mantra} data-author={`-  ${mantra.author}`}>{sholak}</p>
					))
				}
			</abbr>

			<p className={styles.copyright}>{site.footerText}</p>
		</footer>
	);
};

export default Footer;
