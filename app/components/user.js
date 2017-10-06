import React from 'react'

export default class User extends React.Component {

	render() {
		return (
			<div className="cv-author">
				<h1 className="cv-author-name">Иван<br />Чепига</h1>
				<div className="cv-author-birth">22 августа 1991</div>
				<div className="cv-author-position">Front-end, HTML coder</div>
			</div>
		);
	}
}