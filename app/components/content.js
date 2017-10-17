import React from 'react'

import About from './About'
import Tools from './Tools'

export default class Content extends React.Component {
	render() {
		return (
			<div className="cv-col-r">
				<Tools />
				<About />
			</div>
		);
	}
}