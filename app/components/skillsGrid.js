import React from 'react'

import SkillTile from './SkillTile'

export default class SkillsGrid extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="cv-skills-grid-list">
				{this.props.skills.map((skill, index) =>
					<SkillTile title={skill.title} level={skill.level} key={index} />
				)}
			</div>
		);
	}
}