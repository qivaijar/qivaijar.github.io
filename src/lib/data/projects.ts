import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { base } from '$app/paths';

export const items: Array<Project> = [
	{
		slug: 'prosa-tts',
		color: '#6AFB92',
		description: `[Prosa TTS](https://tts.prosa.ai/) is an AI-powered Text-to-Speech (TTS) platform developed by [Prosa.ai](https://prosa.ai/), designed to convert text into natural-sounding speech for Bahasa Indonesia and other languages.
I contributed to this product from April 2021 to March 2025, first as a Senior AI Engineer leading the TTS and Paralinguistic research team, then as Technical Product Manager overseeing the full product development lifecycle.

## Product Highlights

- **344,000+** registered users across Indonesia
- **2.9 million+** minutes of audio generated
- **4.37 / 5** average user rating from 4,767 reviews
- **10 exclusive AI voice models** covering formal, narrative, friendly, and expressive styles

## Supported Languages

Indonesian and English as primary languages, with additional support for Arabic, Mandarin, Japanese, Spanish, Italian, Korean, and Russian.

## Key Features

- **Natural-Sounding Voices**: High-quality, exclusive TTS voice models built with deep learning (Transformers, GANs) and optimized for Indonesian phonetics and pronunciation.
- **Multi-Language Support**: Covers 9 languages, making it suitable for global content creation and localization.
- **Flexible Access**: Available via web console and mobile applications, accessible from any device with an internet connection.
- **Wide Use Cases**: Designed for news broadcasting, podcast production, audiobook creation, e-learning, virtual assistants, public announcements, and advertising.

## My Contributions

- Led the end-to-end development of **10 natural-sounding Indonesian TTS voice models**.
- Built an AI voice conversion system that quadrupled the platform's voice diversity.
- Developed internal tooling including a Text Cleaner library, ML workflow pipelines with MLflow, and a RESTful inference API with FastAPI.
- As Technical Product Manager, grew the user base to **340,000+** and raised product NPS to **84** through user research, roadmap management, and cross-functional team leadership.
`,
		shortDescription:
			'AI-powered Text-to-Speech platform for Bahasa Indonesia, serving 344,000+ users with 10 exclusive voice models.',
		links: [{ to: 'https://tts.prosa.ai/', label: 'Homepage', newTab: true }],
		logo: Assets.Prosatts,
		name: 'Prosa Text-to-Speech (TTS)',
		period: {
			from: new Date('2021-04'),
			to: new Date('2025-03')
		},
		skills: getSkills(
			'python',
			'pytorch',
			'fastapi',
			'docker',
			'git',
			'dvc',
			'pandas',
			'numpy',
			'sklearn',
			'matplotlib',
			'sql',
			'postgres',
			'gcp',
			'roadmap',
			'user_research',
			'product_lifecycle'
		),
		type: 'Text-to-Speech (TTS) Solution Provider from Indonesia'
	},
	{
		slug: 'rizki-portfolio-svelte',
		color: '#0AFFFF',
		description: `I have developed this portfolio website to exhibit my skills and experiences.
					It was implemented using Svelte, utilizing a template sourced from [this repository](https://github.com/RiadhAdrani/slick-portfolio-svelte).
					The site is hosted on GitHub Pages as a static webpage.
					Here, you can explore the technical stacks and skills I possess, view products and projects I have worked on, explore my professional experiences, educational background, and access my most recent curriculum vitae.
					  `,
		shortDescription: 'My personal portfolio website.',
		links: [
			{ to: 'https://github.com/qivaijar/qivaijar.github.io', label: 'GitHub' },
			{ to: 'https://qivaijar.github.io/', label: 'Portfolio Page' }
		],
		logo: Assets.Qivaijar,
		name: 'My Portfolio Website',
		period: {
			from: new Date('2024-09')
		},
		skills: getSkills('svelte', 'git'),
		type: 'Portfolio Website',
		screenshots: [
			{
				label: 'Home Page',
				src: `${base}/projects/rizki-portfolio-svelte/portfolio_website_home.png`
			},
			{
				label: 'Skills Page',
				src: `${base}/projects/rizki-portfolio-svelte/skills.png`
			},
			{
				label: 'Products / Projects Page',
				src: `${base}/projects/rizki-portfolio-svelte/projects.png`
			},
			{
				label: 'Experience Page',
				src: `${base}/projects/rizki-portfolio-svelte/experience.png`
			},
			{
				label: 'Education Page',
				src: `${base}/projects/rizki-portfolio-svelte/education.png`
			},
			{
				label: 'Resume Page',
				src: `${base}/projects/rizki-portfolio-svelte/resume.png`
			}
		]
	}
];

export const title = 'Products & Projects';
