import React from 'react'

const contacts = {
	phone: '+38 093 537 97 82',
	mail: 'axelot.dev@gmail.com',
	website: 'https://axelote.github.io/'
}

export default class Contacts extends React.Component {
	render() {
		return (
			<div className="cv-contacts">
				<div className="cv-contacts-item cv-contacts-phone">{contacts.phone}</div>
				<div className="cv-contacts-item cv-contacts-mail"><a href={'mailto:' + contacts.mail}>{contacts.mail}</a></div>
				<div className="cv-contacts-item cv-contacts-website"><a href={contacts.website} target="_blank">{contacts.website}</a></div>
			</div>
		);
	}
}
