import { Platform } from '$lib/types';
import { getSkills } from './skills';
import desc from '../md/desc.html?raw';

export const title = 'Home';

export const name = 'Rizki Rivai';

export const lastName = 'Ginanjar';

export const description = desc;

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
	}
];

export const skills = getSkills(
	'python',
	'pytorch',
	'oci',
	'langchain',
	'docker',
	'fastapi',
	'git',
	'sql',
	'postgres',
	'gcp',
	'dvc',
	'pandas',
	'numpy',
	'sklearn',
	'matplotlib',
	'matlab',
	'roadmap',
	'user_research',
	'product_lifecycle',
	'svelte'
);
