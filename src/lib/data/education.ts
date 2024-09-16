import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Master of Engineering',
		description: "",
		location: 'Gumi-si, South Korea',
		major: "Information Technology (IT) Convergence Engineering",
		logo: Assets.Kit,
		name: '',
		organization: 'Kumoh National Institute of Technology (KIT)',
		period: { from: new Date("2018-02"), to: new Date("2020-01") },
		shortDescription: '',
		slug: 'kumoh',
		subjects: [],
		gpa: "4.38 / 4.50",
		activities: [
			"Brain Korea 21 (BK21) Scholarship Awardee",
			"Networked System Laboratory (NSL) Member"
		]
	},
	{
		degree: 'Bachelor of Engineering',
		description: "",
		location: 'Bandung, Indonesia',
		major: "Telecommunication Engineering",
		logo: Assets.Telkom,
		name: '',
		organization: 'Telkom University',
		period: { from: new Date("2013-08"), to: new Date("2017-01") },
		shortDescription: '',
		slug: 'telkom',
		subjects: [],
		gpa: "3.83 / 4.00",
		activities: [
			"Cum laude Graduate",
			"Teaching Assistant, Digital Signal Processing (DSP)",
			"Digital Engineering Laboratory, Practicum Assistant",
			"Eka Sanvadita Orchestra (ESO), Pianist",
		]
	}
];

export const title = 'Education';
