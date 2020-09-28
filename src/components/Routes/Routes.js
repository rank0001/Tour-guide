import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import SajekBooking from "../destinations/sajek/SajekBooking";
import SreeMongalBooking from "../destinations/sreemangal/SreeMongalBooking";
import SundarbanBooking from "../destinations/sundarban/SundarbanBooking";
import SundarbanDetails from "../destinations/sundarban/SundarbanDetails";
import SajekDetails from "../destinations/sajek/SajekDetails";
import SreemangalDetails from "../destinations/sreemangal/SreemangalDetails";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import NoRoutes from "../NullRoute/NoRoutes";
export default function Routes() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/booking/sajek" component={SajekBooking} />
				<Route exact path="/booking/sreemangal" component={SreeMongalBooking} />
				<Route exact path="/booking/sundarban" component={SundarbanBooking} />
				<Route path="/booking/sundarban/details" component={SundarbanDetails} />
				<Route path="/booking/sajek/details" component={SajekDetails} />
				<Route path="/booking/signin" component={SignIn} />
				<Route
					path="/booking/sreemangal/details"
					component={SreemangalDetails}
				/>
				<Route path="/signUp" component={SignUp} />
				<Route path="/signIn" component={SignIn} />
				<Route path="*" component={NoRoutes} />
			</Switch>
		</div>
	);
}
