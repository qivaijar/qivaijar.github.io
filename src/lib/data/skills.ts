import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import sql from '../md/sql.md?raw';
import python from '../md/python.md?raw';
import matlab from '../md/matlab.md?raw';
import proadmap from '../md/proadmap.md?raw';
import pytorch from '../md/pytorch.md?raw';
import fastapi from '../md/fastapi.md?raw';
import dvc from '../md/dvc.md?raw';
import git from '../md/git.md?raw';
import docker from '../md/docker.md?raw';
import numpy from '../md/numpy.md?raw';
import pandas from '../md/pandas.md?raw';
import sklearn from '../md/sklearn.md?raw';
import matplotlib from '../md/matplotlib.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Product Management', slug: 'prod' }),
	defineSkillCategory({ name: 'Cloud Computing', slug: 'cloud' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: python,
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'pytorch',
		color: '#e65100',
		description: pytorch,
		logo: Assets.Pytorch,
		name: 'Pytorch',
		category: 'framework'
	}),
	defineSkill({
		slug: 'dvc',
		color: '#7D0552',
		description: dvc,
		logo: Assets.DVC,
		name: 'DVC',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'git',
		color: '#F1502F',
		description: git,
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'docker',
		color: '#18abe3',
		description: docker,
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'sql',
		color: '#00acc1',
		description: sql,
		logo: Assets.SQL,
		name: 'SQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'fastapi',
		color: '#00FA9A',
		description: fastapi,
		logo: Assets.FastApi,		
		name: 'FastApi',
		category: 'framework'
	}),
	defineSkill({
		slug: 'numpy',
		color: '#1974d2',
		description: numpy, 
		logo: Assets.Numpy,
		name: 'NumPy',
		category: 'library'
	}),
	defineSkill({
		slug: 'pandas',
		color: '#2916f5',
		description: pandas,
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'sklearn',
		color: '#FFA600',
		description: sklearn, 
		logo: Assets.Sklearn,
		name: 'scikit-learn',
		category: 'library'
	}),
	defineSkill({
		slug: 'matplotlib',
		color: '#EED202',
		description: matplotlib,
		logo: Assets.Matplotlib,
		name: 'Matplotlib',
		category: 'library'
	}),
	defineSkill({
		slug: 'gcp',
		color: '#ccd1d1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.GCP,
		name: 'Google Cloud Platform',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'matlab',
		color: '#ff5733',
		description:matlab,			
		logo: Assets.Matlab,
		name: 'MATLAB',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'roadmap',
		color: '#66bb6a',
		description: proadmap,
		logo: Assets.Roadmap,
		name: 'Product Roadmap',
		category: 'prod'
	}),
	defineSkill({
		slug: 'product_lifecycle',
		color: '#FF6700',
		description: 
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Lifecycle,
		name: 'Product Lifecycle Management',
		category: 'prod'
	}),
	defineSkill({
		slug: 'user_research',
		color: '#3498db',
		description: 
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.UserResearch,
		name: 'User Research',
		category: 'prod'
	}),
	defineSkill({
		slug: 'postgres',
		color: 'cyan',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework'
	}),

] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
