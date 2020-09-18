import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import RoomDetails from "./RoomDetails";
const SreeMangalDetails = ({ data, userInfo }) => {
	const history = useHistory();
	const logInInfo = userInfo.user.isSignedIn;
	if (!logInInfo) {
		const location = {
			pathname: "/signIn",
			state: { from: "/booking/sreemangal/details" },
		};
		history.push(location);
	}

	return <RoomDetails data={data} />;
};

const mapStateToProps = (state) => {
	return { data: state.rootReducer, userInfo: state.user };
};

export default connect(mapStateToProps)(SreeMangalDetails);
