import React from 'react'

const colors = ['default', 'blue', 'red']

export default class Colorpicker extends React.Component {
	render() {		
		return (
			<div className="cv-colorpicker">
				<h3>Выберите цветовую схему</h3>
				<div className="cv-colorpicker-list">
					{listColors}
				</div>
				<p>{this.state.colorScheme}</p>
			</div>
		);
	}
}