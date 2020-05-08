import React, { Component } from 'react';
import CardHeader from './CardHeader';
import TempRow from './TempRow';
import WeatherIcon from './WeatherIcon';

class WeatherHourly extends Component {
	render() {
		const {
			weatherList, // array of some number of items that holds the weather objects for that day
		} = this.props;

		return (
			<div className = "mh2">
				<CardHeader day = {weatherList[0].dt}/>
				{
					weatherList.map((weatherObj) => {
						return (
							<div className = "dib ba b--light-pink mh1 hourly br2 mv2">
								<p>{new Date(weatherObj.dt*1000).toString().slice(16, 21)}</p>
								<WeatherIcon icon = {weatherObj.weather[0].main} />
								<TempRow high = {weatherObj.main.feels_like} low = {weatherObj.main.temp} />
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default WeatherHourly;