import React, { Component } from 'react';
import WeatherHourly from './WeatherHourly';
import WeatherDaily from './WeatherDaily';

// WeatherCard component -> implement using class
class WeatherCard extends Component {
	constructor(props) {
		super(props);
		this.state = {displayHourly: false};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			displayHourly: !state.displayHourly
		}));
	}

	render() {
		const {
			weatherList,
		} = this.props;
		const displayHourly = this.state.displayHourly;
		return (
			<div className = "pa0 dib ma2 grow mh4" onClick = {this.handleClick}>
				{displayHourly 
					? <WeatherHourly weatherList = {weatherList} /> 
					: <WeatherDaily weatherList = {weatherList} />
				} 
			</div> // diplay hourly weather forecast when card is clicked
		);
	}
}

export default WeatherCard;