import React from 'react'

export default class Tools extends React.Component {
	render() {
		return (
			<div className="cv-tools">
				<div className="cv-tools-i disabled">Отправить</div>
				<div className="cv-tools-i disabled">Печать</div>
				<div className="cv-tools-i">Настройки</div>
			</div>
		);
	}
}