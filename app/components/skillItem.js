import React from 'react'

export default class SkillItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {currentPercent: 0};
	}

	componentDidMount() {
		setInterval(this.timer.bind(this), 7);
	}

	timer() {
		var percentValue = this.state.currentPercent + 1;
		if (percentValue <= this.props.percent) {
			this.setState({ currentPercent: percentValue })
		}
		else {
			clearInterval(this.timer);
		}
	}

	render() {
		return (
			<div className="cv-skills-list-i">
				<div className="cv-skills-list-i-heading">
					<div className="cv-skills-list-i-title">{this.props.title}</div>
					<div className="cv-skills-list-i-percent">{this.props.percent}</div>
				</div>
				<div className="cv-skills-list-i-progressbar-wrap">
					<div className="cv-skills-list-i-progressbar" style={{width: this.state.currentPercent + '%'}}></div>
				</div>
			</div>
		);
	}
}