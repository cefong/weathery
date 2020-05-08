import React, { Component } from 'react';
import WeatherPanel from './WeatherPanel';
import Navbar from'./Navbar';
import tachyons from 'tachyons';

class Home extends Component {
	render() {
		const {weatherList} = this.props;
			return (
				<div className = "container tc bg-washed-red">
					<h1 className = "h5 mt0 mb4 blonde pt5">weathery</h1>			
					<WeatherPanel className =  "mv0 panel" weatherList = {weatherList}/>	
					<div className = "h3 mt0"></div>
				</div>
			);
	}
}

export default Home;