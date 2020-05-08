import React, { Component } from 'react';
import axios, { get } from 'axios';
import RouteHandler from './RouteHandler';
import tachyons from 'tachyons';

// final App component that holds everything
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weatherList: [], // this array will hold five days worth of weather information from JSON data model
		};
	}

	componentDidMount() {
		get('http://api.openweathermap.org/data/2.5/forecast?q=Calgary&appid=988c9947ac512411c93bc0974ccc343c')
			.then(res => {
				const weatherList = res.data.list;
				this.setState({weatherList});
			});
	}

	render() {
		const {weatherList} = this.state;
		if (!weatherList.length) {
			return (
				<div className = "container debug tc bg-washed-red">
					<h1 className = "h5 ma0 blonde pt5">weathery</h1>
					<h1 className = "h5 mt6 blonde pt5">Loading...</h1>
				</div>
			);
		} else {
			return (
				<RouteHandler weatherList = {weatherList} />
			);
		}
	}
}

export default App;