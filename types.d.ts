import { type } from 'os';

declare module '*.pdf';

export type ScrollToPointerProps = {
	ele: HTMLElement | null;
	eventType: 'pointer';
	event:  React.MouseEvent<HTMLLIElement, MouseEvent>;
	key?: undefined;
};
export type ScrollToKeyBoardProps = {
	ele: HTMLElement | null;
	eventType: 'key';
	event: React.KeyboardEvent<HTMLElement>;
	key?: string;
};
export type ScrollTo = (
	props: ScrollToPointerProps | ScrollToKeyBoardProps,
) => void;

export interface Skill {
	name: string;
	type?: 'frontend' | 'backend';
}
interface Project {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	coverImage: CoverImage;
	description: string;
	github: string;
	tags: string[];
	title: string;
	website: string;
}
interface Site {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	contactTitle: string;
	heroCoverImage: CoverImage;
	heroDescription: string;
	heroResume: CoverImage;
	heroTags: Tag[];
	heroTitle: string;
	projectsTitle: string;
	skillsTitle: string;
	socials: Social[];
	footerSholaks: Mantra[];
	footerText: string;
	heroCTA: string;
  }
interface CoverImage {
	_type: string;
	asset: Asset;
}
interface Social {
  _key: string;
  _type: string;
  icon: CoverImage;
  name: string;
  url: string;
}

interface Tag {
  _key: string;
  _type: string;
  tagName: string;
  tagType: string;
}
interface Asset {
	_ref: string;
	_type: string;
}
interface Mantra {
  _key: string;
  _type: string;
  author: string;
  translation: string;
  sholak: string[];
}