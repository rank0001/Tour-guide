import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import RoomsMapDetail from "./RoomsMapDetail";
const SajekDetails = ({ data, user }) => {
	const history = useHistory();
	const logInInfo = user.user.isSignedIn;
	if (!logInInfo) {
		const location = {
			pathname: "/signIn",
			state: { from: "/booking/sajek/details" },
		};

		history.push(location);
	}
	return <RoomsMapDetail data={data} />;
};

const mapStateToProps = (state) => {
	return { data: state.rootReducer, userInfo: state.user };
};

export default connect(mapStateToProps)(SajekDetails);
