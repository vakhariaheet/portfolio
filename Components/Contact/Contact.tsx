import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import styles from './Contact.module.scss';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { motion, useInView, Variants } from 'framer-motion';
import { Site } from '../../types';
import Image from 'next/image';
import { urlFor } from '../../utils/utils';
export interface ContactProps {
	setContactRef: Dispatch<SetStateAction<HTMLElement | null>>;
	site: Site;
}

const Contact: React.FC<ContactProps> = ({ setContactRef, site }) => {
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
						className={styles.contact__input + ' ' + styles.textarea}
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
					{site.socials.map((social) => (
						<motion.div
							className={styles.icon}
							tabIndex={0}
							onClick={() => window.open(social.url)}
							variants={logo}
							key={social._key}
						>
							<Image
								src={urlFor(social.icon).url()}
								alt={social.name}
								placeholder='blur'
								blurDataURL={urlFor(social.icon).blur(50).url()}
								priority={true}
								height={40}
								width={40}
							/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Contact;
