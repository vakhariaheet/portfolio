import { type } from 'os';

declare module '*.pdf';

export type ScrollToPointerProps = {
	ele: HTMLDivElement | null;
	eventType: 'pointer';
	event: React.PointerEvent<HTMLElement>;
	key?: undefined;
};
export type ScrollToKeyBoardProps = {
	ele: HTMLDivElement | null;
	eventType: 'key';
	event: React.KeyboardEvent<HTMLElement>;
	key?: string;
};
export type ScrollTo = (
	props: ScrollToPointerProps | ScrollToKeyBoardProps,
) => void;
export interface Project {
	image: string;
	name: string;
	githubURL: string;
	url: string;
	description: string;
	tags: string[];
}
export interface Skill {
	name: string;
	type?: 'frontend' | 'backend';
}
