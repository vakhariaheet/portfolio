import { DateTime, Interval } from 'luxon';
import { ScrollTo } from '../types';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../data/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
/**
 * Scroll To element on Event
 * @param {ScrollTo} options
 * @returns
 */
export const scrollTo: ScrollTo = ({
	ele,
	event,
	eventType,
	key = 'Enter',
}) => {
	if (ele === null) return;
	if (eventType === 'pointer') {
		return ele.scrollIntoView({
			behavior: 'smooth',
		});
	}
	if (eventType === 'key') {
		if (event.key === key) {
			return ele.scrollIntoView({
				behavior: 'smooth',
			});
		}
	}
	return;
};
/**
 * Get Edution Info
 */
export const getEduInfo = () => {
	const isoStr = new Date().toISOString();
	const startingISO = '2022-07-10T05:15:00.097Z';
	const now = DateTime.fromISO(isoStr);
	const starting = DateTime.fromISO(startingISO);
	const startingYear =
		parseInt(Interval.fromDateTimes(starting, now).length('years').toString()) +
		1;
	let suffix = '';
	if (startingYear === 1) suffix = 'st';
	if (startingYear === 2) suffix = 'nd';
	if (startingYear === 3) suffix = 'rd';
	if (startingYear >= 4) suffix = 'th';
	return {
		year: startingYear + suffix,
		degree: startingYear > 3 ? 'Master of Science' : 'Bachelor of Science',
	};
};
const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => {
	return builder.image(source);
};
export const urlForImage = (image: any) => {
	return builder.image(image);
}
export const urlForFile = (file: any) => { 
	const [_file, id, extension] = file.asset._ref.split('-');
	return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`
}
