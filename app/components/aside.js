import React from 'react'

import Author from './Author'
import Contacts from './Contacts'

export default class Aside extends React.Component {
	render() {
		return (
			<aside className="cv-col-l">
				<Author />
				<Contacts />
			</aside>
		);
	}
}