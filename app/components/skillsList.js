import React from 'react'

export default class SkillsList extends React.Component {

	componentDidMount() {
		window.addEventListener('load', this.move);
	}

	move() {
		var width = 1;
		var id = setInterval(frame, 10);
		function frame() {
			for (var i = 0; i < skills.length; i++) {
				if (width >= skills.percent) {
					clearInterval(id);
				} else {
					width++;
				}
			}
		}
	}

	render() {
		return (
			<div className="cv-skills-list">
				{this.props.skills.map((skill, index) =>
					<div className="cv-skills-list-i" key={index}>
						<div className="cv-skills-list-i-heading">
							<div className="cv-skills-list-i-title">{skill.title}</div>
							<div className="cv-skills-list-i-percent">{skill.percent}</div>
						</div>
						<div className="cv-skills-list-i-progressbar-wrap">
							<div className="cv-skills-list-i-progressbar" style={{width: this.props.width}}></div>
						</div>
					</div>
				)}
			</div>
		);
	}
}