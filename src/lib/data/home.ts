import { Platform } from '$lib/types';
import { getSkills } from './skills';
import desc from '../md/desc.html?raw';

export const title = 'Home';

export const name = 'Rizki Rivai';

export const lastName = 'Ginanjar';

export const description = desc

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/qivaijar' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/rizkirivaiginanjar/'
	},
	{
		platform: Platform.Email,
		link: 'qivaijar@gmail.com'
	},
	{
		platform: Platform.Instagram,
		link: 'https://www.instagram.com/qivaijar/'
	},
];

export const skills = getSkills(
	'gcp',
	'matlab',
	'docker',
	'roadmap',
	'user_research',
	'python',
	'sql',
	'svelte',
	'postgres',
	'pytorch',
	'dvc',
	'git',
	'product_lifecycle',
	'pandas',
	'numpy',
	'sklearn',
	'matplotlib',
	);
