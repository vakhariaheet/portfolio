import React from 'react';
import styles from './Footer.module.scss';
export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className={styles.footer}>
			<abbr title='“You have the right to action alone. You never have the right to the fruit. Do not be motivated to act because of the fruit. But don’t be motivated to not acting either”-Bhagat Gita(chapter 2 shlok 47)(Translation by Bibek Debroy)'>
				<p className={styles.mantra}> कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।</p>
				<p className={styles.mantra}>
					मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥
				</p>
			</abbr>

			<p className={styles.copyright}>made with ♥️ by Heet Vakharia</p>
		</footer>
	);
};

export default Footer;
