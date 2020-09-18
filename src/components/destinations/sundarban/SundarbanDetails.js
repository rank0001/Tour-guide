import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Details from "./Details";
const SundarbanDetails = ({ data, userInfo }) => {
	const history = useHistory();
	const logInInfo = userInfo.user.isSignedIn;
	if (!logInInfo) {
		const location = {
			pathname: "/signIn",
			state: { from: "/booking/sundarban/details" },
		};
		history.push(location);
	}

	return <Details data={data} />;
};

const mapStateToProps = (state) => {
	return { data: state.rootReducer, userInfo: state.user };
};

export default connect(mapStateToProps)(SundarbanDetails);
