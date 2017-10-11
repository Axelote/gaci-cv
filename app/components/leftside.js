import React from 'react'

import Author from './Author'
import Contacts from './Contacts'

export default class LeftSide extends React.Component {
	render() {
		return (
			<div className="cv-col-l">
				<Author />
				<Contacts />
			</div>
		);
	}
}