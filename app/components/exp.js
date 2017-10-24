import React from 'react'

import ExpItem from './ExpItem'

const workExps = [
	{
		company: "Rozetka.ua",
		period: 'Май 2015 – текущий момент',
		duties: 'Что-то делал, полезное'
	},
	{
		company: "CSS Masters",
		period: 'Февраль 2015 – Май 2015',
		duties: 'Компания распалась'
	}
];

export default class Exp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="cv-exp cv-block">
				<div className="container">
					<h2 className="cv-block-title">Опыт работы</h2>
					{workExps.map((workExp, index) =>
						<ExpItem company={workExp.company} period={workExp.period} duties={workExp.duties} key={index} />
					)}
				</div>
			</div>
		);
	}
}