import React, { Component } from 'react';
import CardHeader from './CardHeader';
import WeatherIcon from './WeatherIcon';
import TempRow from './TempRow';

class WeatherDaily extends Component {
	render() {
		const {
			weatherList,
		} = this.props;
		let avgLow = 0, avgHigh = 0;
		console.log(weatherList);
		weatherList.map((weatherObj) => {
			avgLow += weatherObj.main.feels_like;
			avgHigh += weatherObj.main.temp;
		});
		avgLow = avgLow/(weatherList.length);
		avgHigh = avgHigh/(weatherList.length);
		return (
			<div className = "bg-light-gray ba pa1 b--dark-pink br3 card">
				<CardHeader day = {weatherList[0].dt}/>
				<WeatherIcon icon = {weatherList[0].weather[0].main}/>
				<TempRow high = {avgHigh} low = {avgLow}/> 
			</div>
		);
	}
}

export default WeatherDaily;