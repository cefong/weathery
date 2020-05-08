import React, { Component } from 'react';
import Sun from './Assets/Sun.svg';
import Cloud from './Assets/Cloud.svg';
import Fog from './Assets/Fog.svg';
import Rain from './Assets/Rain.svg';
import Snow from './Assets/Snow.svg';
import Storm from './Assets/Storm.svg';
import Wind from './Assets/Wind.svg';

// WeatherIcon component -> implement using class
class WeatherIcon extends Component {
	render() {
		const {
			icon,
		} = this.props;
		return (
			<div className = "icon">
				{ (() => {
					switch(icon) {
						case 'Clear': 
							return <img src={Sun} alt='Sun'/>;
						case 'Clouds': 
							return <img src={Cloud} alt='Cloud'/>;
						case 'Mist':
						case 'Smoke':
						case 'Haze':
						case 'Dust':
						case 'Fog':
						case 'Sand':
						case 'Ash':
							return <img src={Fog} alt='Fog'/>;
						case 'Drizzle':
						case 'Rain':
							return <img src={Rain} alt='Rain'/>;
						case 'Snow':
							return <img src={Snow} alt='Snow'/>;
						case 'Thunderstorm':
							return <img src={Storm} alt='Storm'/>;
						case 'Squall':
						case 'Tornado':
							return <img src={Wind} alt='Wind'/>;
						default:
							return <p>Oops, something went wrong</p>;
					}
				})()} 
			</div> // this is a self calling function
		);
	}
}

export default WeatherIcon;