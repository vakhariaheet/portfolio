import SanityClient from '@sanity/client';

export const client = SanityClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
	useCdn: false,
});
