import React, { Component } from 'react';

// CardHeader component -> implement using class
class CardHeader extends Component {
	render() {
		const {
			day
		} = this.props;

		const n = new Date(day*1000).toString();

		return (
			<h1 className = "blonde f4 mt4" >{n.slice(0,3)}</h1>
		);
	}
}

export default CardHeader;