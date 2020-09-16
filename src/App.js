import React from "react";
import Navigbar from "./components/navigationBar/Navigbar";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SajekBooking from "./components/destinations/sajek/SajekBooking";
import SundarbanBooking from "./components/destinations/sundarban/SundarbanBooking";
import SreemangalBooking from "./components/destinations/sreemangal/SreeMongalBooking";
import SundarbanDetails from "./components/destinations/sundarban/SundarbanDetails";
import SajekDetails from "./components/destinations/sajek/SajekDetails";
import SreemangalDetails from "./components/destinations/sreemangal/SreemangalDetails";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

function App() {
	return (
		<Router>
			<Navigbar />

			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/booking/sajek" component={SajekBooking} />
					<Route
						exact
						path="/booking/sreemangal"
						component={SreemangalBooking}
					/>
					<Route exact path="/booking/sundarban" component={SundarbanBooking} />
					<Route
						path="/booking/sundarban/details"
						component={SundarbanDetails}
					/>
					<Route path="/booking/sajek/details" component={SajekDetails} />
					<Route
						path="/booking/sreemangal/details"
						component={SreemangalDetails}
					/> 
          <Route
						path="/signUp"
						component={SignUp}
					/> 
          <Route
						path="/signIn"
						component={SignIn}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
