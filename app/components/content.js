import React from 'react'

import About from './About'
import Tools from './Tools'
import Skills from './Skills'
import Exp from './Exp'

export default class Content extends React.Component {

	render() {
		return (
			<section className="cv-col-r">
				<Tools />
				<About />
				<Skills />
				<Exp />
			</section>
		);
	}
}