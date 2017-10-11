import React from 'react'

const author = {
	name: 'Иван',
	surname: 'Чепига',
	born: '22 августа 1991',
	position: 'Front-end, HTML coder'
}

export default class Author extends React.Component {
	render() {
		return (
			<div className="cv-author">
				<div className="cv-construction">На стадии разработки</div>
				<h1 className="cv-author-name">{author.name}<br />{author.surname}</h1>
				<div className="cv-author-birth">{author.born}</div>
				<div className="cv-author-position">{author.position}</div>
			</div>
		);
	}
}
