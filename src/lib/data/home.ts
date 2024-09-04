import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Rizki Rivai';

export const lastName = 'Ginanjar';

export const description =
	`I'm a dedicated Product Manager and Senior AI Engineer with a strong passion for bridging technology and business.
	With a proven track record, including leading the development of Prosa TTS, a widely-used SaaS-based Text-to-Speech solution, I focus on creating innovative, user-centric products.
	My dual expertise allows me to drive projects from both a technical and strategic perspective, ensuring they not only meet but exceed user expectations.
	`;

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
	'product_lifecycle'
	);
