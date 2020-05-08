import React, { Component } from 'react';

class Temperature extends Component {
	render() {
		const {
			temp,
		} = this.props;
		return (
			<div className = "mh3">
				<p>{Math.round(temp - 273.15)}</p>
			</div>
		)
	}
}

export default Temperature;