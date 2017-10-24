import React from 'react'

import SkillItem from './SkillItem'

export default class SkillsList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="cv-skills-list">
				{this.props.skills.map((skill, index) =>
					<SkillItem title={skill.title} percent={skill.percent} key={index} />
				)}
			</div>
		);
	}
}