import React from 'react'

import SkillsList from './SkillsList'

const skills = [
	{
		title: 'HTML',
		icon: '',
		percent: '80%',
		level: 'Эксперт'
	},
	{
		title: 'CSS',
		icon: '',
		percent: '80%',
		level: 'Эксперт'
	},
];

export default class Skills extends React.Component {

	render() {
		return (
			<div className="cv-skills cv-block">
				<div className="container">
					<h2 className="cv-block-title">Умения</h2>
					<SkillsList skills={skills} />
				</div>
			</div>
		);
	}
}