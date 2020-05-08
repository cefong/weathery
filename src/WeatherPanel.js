import React, { Component } from 'react';
import { SortWeatherList } from './util';
import WeatherCard from './WeatherCard';

// WeatherPanel component -> implement using class
class WeatherPanel extends Component {
	render() {
		const {
			weatherList, // should be a list of 40 items, timestamps start at closest multiple of three
		} = this.props;
		// try to use regEx and the dt_txt element of each weather object to determine what should be categorized where
		// goal: an array of five group of weather objects sorted by day

		let sortedWeatherList = SortWeatherList(weatherList);

		console.log(sortedWeatherList);
		return (
			<div className = "pt3">
				{
					sortedWeatherList.map((list, i) =>
						( !list.isEmpty ? <WeatherCard weatherList = {sortedWeatherList[i]} /> : false)
					)
				}
			</div>
		);
	}
}

export default WeatherPanel;