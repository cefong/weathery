import React, { Component } from 'react';
import WeatherHourly from './WeatherHourly';
import { SortWeatherList } from './util';
import Navbar from './Navbar';

export default function HourlyPage(props) {
	const {
		day,
		weatherList, // full list of 40 weather objects
	} = props;

	let sortedList = SortWeatherList(weatherList);
	let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

	// determine what today is for reference
	let today = new Date().getDay();
	let target = days.indexOf(day);
	let relative;

	if (target >= today) {
		relative = target-today;
	} else if (target < today) {
		relative = target + 7 - today;
	}
	
	if (relative == 6) return <p className = "central">Sorry, we can't read that date yet</p>;

	return (
		<div className = "container tc bg-washed-red">
			<h1 className = "h5 ma0 blonde pt5">weathery</h1>
			<WeatherHourly weatherList = {sortedList[relative]} />
		</div>
	);

}
