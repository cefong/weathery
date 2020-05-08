import React from 'react';
import tachyons from 'tachyons';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
return (
	<nav className = "navbar">
		<ul className = "list pl0 flex justify-around">
			<li className = "dib link dim gray pl1">
				<Link className="black no-underline" to="/">home</Link>
			</li>
			<li className = "dib link dim gray pl1">
				<Link className="black no-underline" to="/sun">sun</Link>
			</li>
			<li className = "dib link dim gray pl1">
				<Link className="black no-underline" to="/mon">mon</Link>
			</li>
			<li className = "dib link dim gray pl1">
				<Link className="black no-underline" to="/tue">tue</Link>
			</li>
			<li className = "dib link dim gray pl1">
				<Link className="black no-underline" to="/wed">wed</Link>
			</li>
			<li className = "dib link dim gray pl1">
				<Link className="black no-underline" to="/thu">thu</Link>
			</li>
			<li className = "dib link dim gray pl1">
				<Link className="black no-underline" to="/fri">fri</Link>
			</li>
			<li className = "dib link dim gray pl1">
				<Link className="black no-underline" to="/sat">sat</Link>
			</li>
		</ul>
	</nav>	
);
}
	