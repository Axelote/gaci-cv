import React from 'react'

export default class ExpItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="cv-exp-i">
				<div className="cv-exp-i-company">{this.props.company}</div>
				<div className="cv-exp-i-period">{this.props.period}</div>
				<div className="cv-exp-i-duties">{this.props.duties}</div>
			</div>
		);
	}
}