import React, { Component } from 'react';
import Home from './Home';
import HourlyPage from './HourlyPage';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Navbar from './Navbar';

export default function RouteHandler(props) {
	const {weatherList} = props;
	return (
		<Router>
			<div className = "debug">
				<Switch>
					<Route path="/sun">
						<HourlyPage day='sun' weatherList={weatherList} />
					</Route>
					<Route path="/mon">
						<HourlyPage day='mon' weatherList={weatherList} />
					</Route>
					<Route path="/tue">
						<HourlyPage day='tue' weatherList={weatherList} />
					</Route>
					<Route path="/wed">
						<HourlyPage day='wed' weatherList={weatherList} />
					</Route>
					<Route path="/thu">
						<HourlyPage day='thu' weatherList={weatherList} />
					</Route>
					<Route path="/fri">
						<HourlyPage day='fri' weatherList={weatherList} />
					</Route>
					<Route path="/sat">
						<HourlyPage day='sat' weatherList={weatherList} />
					</Route>
					<Route path="/">
						<Home weatherList = {weatherList}/>
					</Route>
				</Switch>
			</div>
			<Navbar />
		</Router>
	);
}