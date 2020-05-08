import React, { Component } from 'react';
import Temperature from './Temperature.js';
// TempRow component -> implement using class 
class TempRow extends Component {
	render() {
		const {
			high,
			low
		} = this.props;
		return (
			<div className = "flex justify-center">
				<Temperature temp = {high} />
				<Temperature temp = {low} />
			</div>
		);
	}
}

export default TempRow;