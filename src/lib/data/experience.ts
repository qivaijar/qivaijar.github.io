import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';
import prodman from '../md/prodman.md?raw';
import seniorai from '../md/seniorai.md?raw';
import juniorai from '../md/juniorai.md?raw';
import nsl from '../md/nsl.md?raw';


export const items: Array<Experience> = [
	{
		slug: 'prosa-prod-man',
		company: 'Prosa.ai',
		description: prodman,
		contract: ContractType.FullTime,
		type: 'Software Development (NLP-Based AI Products)',
		location: 'Bandung, Indonesia',
		period: { from: new Date("2024-01") },
		skills: getSkills('gcp', 'sql', 'postgres', 'product_lifecycle', 'user_research', 'roadmap'),
		name: 'Technical Product Manager',
		color: '#6aFB92',
		links: [
			{
				to: "https://prosa.ai",
				label: "Prosa.ai's Homepage",
				newTab: true
			},
			{
				to: "https://tts.prosa.ai",
				label: "Prosa TTS's Homepage",
				newTab: true
			}
		],
		logo: Assets.Prosa,
		shortDescription: 'Lead the Prosa Text-to-Speech (TTS), cross-functional, product development team.'
	},
	{
		slug: 'prosa-senior-ai',
		company: 'Prosa.ai',
		description: seniorai,
		contract: ContractType.FullTime,
		type: 'Software Development (NLP-Based AI Products)',
		location: 'Bandung, Indonesia',
		period: { from: new Date("2021-07") },
		skills: getSkills('python', 'docker', 'pytorch', 'dvc', 'git', 'pandas', 'numpy', 'sklearn', 'matplotlib'),
		name: 'Senior Artificial Intelligence (AI) Engineer',
		color: '#6AFB92',
		links: [
			{
				to: "https://prosa.ai",
				label: "Prosa.ai's Homepage",
				newTab: true
			}
		],
		logo: Assets.Prosa,
		shortDescription: 'Lead the Prosa Text-to-Speech (TTS) & Paralinguistic research team.'
	},
	{
		slug: 'prosa-ai',
		company: 'Prosa.ai',
		description: juniorai,
		contract: ContractType.FullTime,
		type: 'Software Development (NLP-Based AI Products)',
		location: 'Bandung, Indonesia',
		period: { from: new Date("2020-05"),
				  to: new Date("2021-06"),
				},
		skills: getSkills('python', 'pytorch', 'git', 'pandas', 'numpy', 'sklearn', 	'matplotlib'),
		name: 'Artificial Intelligence (AI) Engineer',
		color: '#6AFB92',
		links: [
			{
				to: "https://prosa.ai",
				label: "Prosa.ai's Homepage",
				newTab: true
			}
		],
		logo: Assets.Prosa,
		shortDescription: 'Developed AI-based solutions for Text-to-Speech (TTS) and Paralinguistic systems.'
	},
	{
		slug: 'nsl',
		company: 'Networked System Laboratory (NSL)',
		description: nsl,
		contract: ContractType.FullTime,
		type: 'Research & Development',
		location: 'Gumi-si, South Korea',
		period: { from: new Date("2018-02"),
				  to: new Date("2020-01"),
				},
		skills: getSkills('matlab'),
		name: 'Fulltime Researcher',
		color: '#0059FF',
		links: [
			{
				to: "https://nsl.kumoh.ac.kr/",
				label: "NSL's Homepage",
				newTab: true
			}
		],
		logo: Assets.Nsl,
		shortDescription: 'Worked on research involving the implementation of machine learning technologies in wireless communication systems.'
	},
];

export const title = 'Experience';
