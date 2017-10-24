import React from 'react'

export default class SkillTile extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="cv-skills-grid-tile">
				<div className="cv-skills-grid-tile-title">{this.props.title}</div>
				<div className="cv-skills-grid-tile-level">{this.props.level}</div>
			</div>
		);
	}
}