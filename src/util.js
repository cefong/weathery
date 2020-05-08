import React from 'react';

export function SortWeatherList(weatherList) {
	const sortedWeatherList = [[],[],[],[],[],[]];

	var startOfToday = new Date();
	startOfToday.setHours(0,0,0,0); // using getTime on this will give the unix for the beginning of the day
	let i = 1;

	// sort weatherList into respective days
	weatherList.map((weatherObj) => {
		if (weatherObj.dt < (startOfToday.getTime()/1000+i*86400)) {
			sortedWeatherList[i-1].push(weatherObj);
		} else {
			sortedWeatherList[i].push(weatherObj);
			i++;
		}			
	});
	return sortedWeatherList;
}

