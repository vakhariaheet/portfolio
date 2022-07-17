import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import styles from './Contact.module.scss';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { motion, useInView, Variants } from 'framer-motion';
export interface ContactProps {
	setContactRef: Dispatch<SetStateAction<HTMLElement | null>>;
}

const Contact: React.FC<ContactProps> = ({ setContactRef }) => {
	const [contactInfo, setContactInfo] = useState({
		name: '',
		email: '',
		subject: '',
		body: '',
	});
	const containerRef = useRef<HTMLFormElement>(null);
	const inView = useInView(containerRef, {
		once: true,
		amount: 'some',
	});

	const parent: Variants = {
		show: {
			transition: {
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
		hidden: {
			transition: {
				staggerDirection: -1,
			},
		},
	};
	const logo: Variants = {
		show: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.4,
			},
		},
		hidden: {
			y: 50,
			opacity: 0,
		},
	};
	const onFormSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		if (
			Object.values(contactInfo).every((v) => v) &&
			/\w+@\w+\.(\w+)+/.test(contactInfo.email)
		) {
			const resp = emailjs.send(
				process.env.NEXT_PUBLIC_SERVICE_ID as string,
				process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
				contactInfo,
				process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
			);
			toast.promise(resp, {
				loading: 'Loading',
				success: 'Message Sent',
				error: 'Error, Sending the message',
			});
		} else {
			if (!Object.values(contactInfo).every((v) => v)) {
				return toast.error('Please Fill up all the fields');
			}
			if (!/\w+@\w+\.(\w+)+/.test(contactInfo.email)) {
				return toast.error('Please enter a valid email');
			}
		}
	};
	return (
		<section className={styles.contact} ref={setContactRef}>
			<motion.h4
				initial={{
					y: -100,
					opacity: 0,
					scale: 0.8,
				}}
				animate={
					inView && {
						y: 0,
						opacity: 1,
						scale: 1,
					}
				}
				className={styles.contact__heading}
			>
				Contact Me
			</motion.h4>
			<motion.form
				className={styles.contact__form}
				onSubmit={onFormSubmit as any}
				ref={containerRef}
				initial={{
					x: -100,
					opacity: 0,
				}}
				animate={inView && { x: 0, opacity: 1 }}
				transition={{
					delay: 0.2,
					type: 'spring',
					damping: 10,
					stiffness: 100,
					duration: 0.3,
				}}
			>
				<label htmlFor='name'>
					<input
						type='text'
						name='name'
						className={styles.contact__input}
						id='name'
						value={contactInfo.name}
						onChange={(e) =>
							setContactInfo({ ...contactInfo, name: e.target.value })
						}
						placeholder='Your Name'
					/>
				</label>
				<label htmlFor='email'>
					<input
						type='text'
						name='email'
						className={styles.contact__input}
						id='email'
						placeholder='Your Email'
						value={contactInfo.email}
						onChange={(e) =>
							setContactInfo({ ...contactInfo, email: e.target.value })
						}
					/>
				</label>
				<label htmlFor='subject'>
					<input
						type='text'
						name='subject'
						className={styles.contact__input}
						id='subject'
						placeholder='Subject'
						spellCheck={'true'}
						value={contactInfo.subject}
						onChange={(e) =>
							setContactInfo({ ...contactInfo, subject: e.target.value })
						}
						data-grammarly
					/>
				</label>
				<label htmlFor='body'>
					<textarea
						name='body'
						className={styles.contact__input}
						id={`${styles.body} body`}
						placeholder='Message'
						value={contactInfo.body}
						onChange={(e) =>
							setContactInfo({ ...contactInfo, body: e.target.value })
						}
					/>
				</label>
				<button className={styles.contact__submit} type='submit'>
					Submit
				</button>
			</motion.form>
			<motion.div className={styles.contact__social}>
				<motion.div
					className={styles.iconContainer}
					variants={parent}
					initial='hidden'
					animate={inView ? 'show' : 'hidden'}
				>
					<motion.div
						className={styles.icon}
						tabIndex={0}
						onPointerDown={() =>
							window.open('https://twitter.com/vakharia_heet')
						}
						variants={logo}
					>
						<svg
							viewBox='0 0 236 192'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>Twitter</title>
							<path
								d='M74.4 191.5C163.1 191.5 211.6 118 211.6 54.3C211.6 52.2 211.6 50.1 211.5 48.1C220.9 41.3 229.1 32.8 235.6 23.1C227 26.9 217.7 29.5 207.9 30.7C217.9 24.7 225.5 15.3 229.1 4C219.8 9.5 209.5 13.5 198.5 15.7C189.7 6.3 177.2 0.5 163.3 0.5C136.7 0.5 115.1 22.1 115.1 48.7C115.1 52.5 115.5 56.2 116.4 59.7C76.3 57.7 40.8 38.5 17 9.3C12.9 16.4 10.5 24.7 10.5 33.5C10.5 50.2 19 65 32 73.6C24.1 73.4 16.7 71.2 10.2 67.6C10.2 67.8 10.2 68 10.2 68.2C10.2 91.6 26.8 111 48.9 115.5C44.9 116.6 40.6 117.2 36.2 117.2C33.1 117.2 30.1 116.9 27.1 116.3C33.2 135.5 51 149.4 72.1 149.8C55.6 162.7 34.8 170.4 12.2 170.4C8.30001 170.4 4.50001 170.2 0.700012 169.7C21.8 183.5 47.2 191.5 74.4 191.5Z'
								fill='#1B9DF0'
							/>
						</svg>
					</motion.div>
					<motion.div
						className={styles.icon}
						tabIndex={0}
						onPointerDown={() =>
							window.open('https://codepen.io/vakharia_heet')
						}
						variants={logo}
					>
						<svg
							enableBackground='new 0 0 128 128'
							id='Social_Icons'
							version='1.1'
							viewBox='0 0 128 128'
							xmlSpace='preserve'
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
						>
							<title>Codepen</title>
							<rect clipRule='evenodd' fill='none' fillRule='evenodd' />
							<path
								clipRule='evenodd'
								d='M117,73.204L103.24,64L117,54.796V73.204z     M69.5,112.22V86.568L93.348,70.62l19.248,12.872L69.5,112.22z M64,77.012L44.548,64L64,50.988L83.456,64L64,77.012z M58.5,112.22    L15.404,83.492L34.656,70.62L58.5,86.568V112.22z M11,54.796L24.764,64L11,73.204V54.796z M58.5,15.78v25.652L34.656,57.384    L15.404,44.508L58.5,15.78z M69.5,15.78l43.096,28.728L93.348,57.384L69.5,41.432V15.78z M127.952,43.784    c-0.012-0.084-0.032-0.16-0.044-0.24c-0.028-0.156-0.056-0.312-0.096-0.46c-0.024-0.092-0.06-0.18-0.088-0.268    c-0.044-0.136-0.088-0.268-0.14-0.4c-0.036-0.092-0.08-0.184-0.124-0.268c-0.056-0.128-0.116-0.248-0.188-0.364    c-0.048-0.088-0.104-0.172-0.156-0.256c-0.072-0.116-0.148-0.228-0.232-0.336c-0.06-0.08-0.124-0.16-0.188-0.236    c-0.088-0.104-0.18-0.204-0.276-0.3c-0.072-0.072-0.14-0.148-0.216-0.212c-0.104-0.092-0.208-0.18-0.312-0.264    c-0.084-0.064-0.164-0.128-0.248-0.188c-0.032-0.02-0.06-0.048-0.092-0.068l-58.5-39c-1.848-1.232-4.252-1.232-6.104,0l-58.496,39    c-0.032,0.02-0.06,0.048-0.092,0.068c-0.088,0.06-0.168,0.124-0.248,0.188C2.004,40.264,1.9,40.352,1.8,40.444    c-0.076,0.064-0.148,0.14-0.22,0.212c-0.096,0.096-0.188,0.196-0.272,0.3c-0.068,0.076-0.132,0.156-0.192,0.236    c-0.08,0.108-0.156,0.22-0.228,0.336c-0.056,0.084-0.108,0.168-0.16,0.256C0.66,41.9,0.6,42.02,0.54,42.148    c-0.04,0.084-0.084,0.176-0.12,0.268c-0.056,0.132-0.1,0.264-0.144,0.4c-0.028,0.088-0.06,0.176-0.084,0.268    c-0.04,0.148-0.068,0.304-0.096,0.46c-0.016,0.08-0.036,0.156-0.044,0.24C0.02,44.016,0,44.256,0,44.5v39    c0,0.24,0.02,0.48,0.052,0.72c0.008,0.076,0.028,0.156,0.044,0.236c0.028,0.156,0.056,0.308,0.096,0.46    c0.024,0.092,0.056,0.18,0.084,0.268c0.044,0.132,0.088,0.268,0.144,0.404c0.036,0.088,0.08,0.176,0.12,0.264    c0.06,0.124,0.12,0.244,0.188,0.368c0.052,0.084,0.104,0.168,0.16,0.252c0.072,0.116,0.148,0.224,0.228,0.332    c0.06,0.084,0.124,0.164,0.192,0.24c0.084,0.1,0.176,0.204,0.272,0.296c0.072,0.076,0.144,0.148,0.22,0.216    c0.1,0.092,0.204,0.18,0.312,0.264c0.08,0.064,0.16,0.128,0.248,0.188c0.032,0.02,0.06,0.048,0.092,0.068l58.496,39    C61.872,127.692,62.936,128,64,128s2.128-0.308,3.052-0.924l58.5-39c0.032-0.02,0.06-0.048,0.092-0.068    c0.084-0.06,0.164-0.124,0.248-0.188c0.104-0.084,0.208-0.172,0.312-0.264c0.076-0.068,0.144-0.14,0.216-0.216    c0.096-0.092,0.188-0.196,0.276-0.296c0.064-0.076,0.128-0.156,0.188-0.24c0.084-0.108,0.16-0.216,0.232-0.332    c0.052-0.084,0.108-0.168,0.156-0.252c0.072-0.124,0.132-0.244,0.188-0.368c0.044-0.088,0.088-0.176,0.124-0.264    c0.052-0.136,0.096-0.272,0.14-0.404c0.028-0.088,0.064-0.176,0.088-0.268c0.04-0.152,0.068-0.304,0.096-0.46    c0.012-0.08,0.032-0.16,0.044-0.236c0.032-0.24,0.048-0.48,0.048-0.72v-39C128,44.256,127.984,44.016,127.952,43.784z'
								fill='#0B0B0A'
								fillRule='evenodd'
								id='Codepen_1_'
							/>
						</svg>
					</motion.div>
					<motion.div
						className={styles.icon}
						tabIndex={0}
						onPointerDown={() => window.open('https://github.com/vakhariaheet')}
						variants={logo}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 1024 1024'
							fill='none'
						>
							<title>Github</title>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z'
								transform='scale(64)'
								fill='#1B1F23'
							/>
						</svg>
					</motion.div>
					<motion.div
						className={styles.icon}
						tabIndex={0}
						onPointerDown={() =>
							window.open(
								'https://meta.stackoverflow.com/users/13262683/heet-vakharia',
							)
						}
						variants={logo}
					>
						<svg
							viewBox='0 0 100 118'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>StackOverFlow</title>
							<path
								d='M84.0211 75.8252V106.825H11V75.8252H0V117.825H95V75.8252H84.0211Z'
								fill='#BCBBBB'
							/>
							<path
								d='M21.0566 96.8252H73.9998V86.8252H21.0566V96.8252ZM22.1148 72.9099L73.5434 83.7035L75.6598 73.439L24.2312 62.6454L22.1148 72.9099ZM28.8873 48.2539L76.5063 70.4761L80.9508 60.9523L33.3318 38.7301L28.8873 48.2539ZM42.1148 24.8677L82.5381 58.5184L89.3105 50.4761L48.7815 16.8254L42.1148 24.8677ZM68.1465 0L59.6809 6.24337L91.0037 48.4655L99.4693 42.2221L68.1465 0Z'
								fill='#F48024'
							/>
						</svg>
					</motion.div>
					<motion.div
						className={styles.icon}
						tabIndex={0}
						onPointerDown={() =>
							window.open('https://www.linkedin.com/in/vakhariaheet/')
						}
						variants={logo}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							version='1.1'
							xmlnsXlink='http://www.w3.org/1999/xlink'
							viewBox='0 0 176 176'
							xmlSpace='preserve'
						>
							<title>Linkedin</title>
							<rect
								id='background'
								fill='#0077b5'
								height={176}
								rx={24}
								width={176}
								data-original='#0077b5'
							/>
							<g id='icon' fill='#fff'>
								<path
									d='m63.4 48a15 15 0 1 1 -15-15 15 15 0 0 1 15 15z'
									fill='#ffffff'
									data-original='#ffffff'
								/>
								<path
									d='m60 73v66.27a3.71 3.71 0 0 1 -3.71 3.73h-15.81a3.71 3.71 0 0 1 -3.72-3.72v-66.28a3.72 3.72 0 0 1 3.72-3.72h15.81a3.72 3.72 0 0 1 3.71 3.72z'
									fill='#ffffff'
									data-original='#ffffff'
								/>
								<path
									d='m142.64 107.5v32.08a3.41 3.41 0 0 1 -3.42 3.42h-17a3.41 3.41 0 0 1 -3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86a3.42 3.42 0 0 1 -3.37 3.42h-16.42a3.41 3.41 0 0 1 -3.41-3.42v-66.87a3.41 3.41 0 0 1 3.41-3.42h16.42a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z'
									fill='#ffffff'
									data-original='#ffffff'
								/>
							</g>
						</svg>
					</motion.div>
					<motion.div
						className={styles.icon}
						tabIndex={0}
						onPointerDown={() =>
							window.open('https://instagram.com/vakharia_heet')
						}
						variants={logo}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							version='1.1'
							xmlnsXlink='http://www.w3.org/1999/xlink'
							viewBox='0 0 551.034 551.034'
							xmlSpace='preserve'
						>
							<g>
								<g xmlns='http://www.w3.org/2000/svg'>
									<linearGradient
										id='SVGID_1_'
										gradientUnits='userSpaceOnUse'
										x1='275.517'
										y1='4.57'
										x2='275.517'
										y2='549.72'
										gradientTransform='matrix(1 0 0 -1 0 554)'
									>
										<stop offset={0} style={{ stopColor: '#E09B3D' }} />
										<stop offset='0.3' style={{ stopColor: '#C74C4D' }} />
										<stop offset='0.6' style={{ stopColor: '#C21975' }} />
										<stop offset={1} style={{ stopColor: '#7024C4' }} />
									</linearGradient>
									<path
										style={{ fill: 'url(#SVGID_1_)' }}
										d='M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722   c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156   C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156   c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722   c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z'
									/>
									<linearGradient
										id='SVGID_2_'
										gradientUnits='userSpaceOnUse'
										x1='275.517'
										y1='4.57'
										x2='275.517'
										y2='549.72'
										gradientTransform='matrix(1 0 0 -1 0 554)'
									>
										<stop offset={0} style={{ stopColor: '#E09B3D' }} />
										<stop offset='0.3' style={{ stopColor: '#C74C4D' }} />
										<stop offset='0.6' style={{ stopColor: '#C21975' }} />
										<stop offset={1} style={{ stopColor: '#7024C4' }} />
									</linearGradient>
									<path
										style={{ fill: 'url(#SVGID_2_)' }}
										d='M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517   S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083   s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z'
									/>
									<linearGradient
										id='SVGID_3_'
										gradientUnits='userSpaceOnUse'
										x1='418.31'
										y1='4.57'
										x2='418.31'
										y2='549.72'
										gradientTransform='matrix(1 0 0 -1 0 554)'
									>
										<stop offset={0} style={{ stopColor: '#E09B3D' }} />
										<stop offset='0.3' style={{ stopColor: '#C74C4D' }} />
										<stop offset='0.6' style={{ stopColor: '#C21975' }} />
										<stop offset={1} style={{ stopColor: '#7024C4' }} />
									</linearGradient>
									<circle
										style={{ fill: 'url(#SVGID_3_)' }}
										cx='418.31'
										cy='134.07'
										r='34.15'
									/>
								</g>
							</g>
						</svg>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Contact;
