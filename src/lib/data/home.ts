import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Rizki Rivai';

export const lastName = 'Ginanjar';

export const description =
	`Hey there! I'm a product manager with 6 years of experience in the artificial intelligence (AI) field.
	I started my career as a full-time researcher, then transitioned to an AI engineer, and now I'm the product manager of an AI-based product.
	`;

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/qivaijar' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/rizkirivaiginanjar/'
	},
	{
		platform: Platform.Email,
		link: 'riadh_adrani@hotmail.fr'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
