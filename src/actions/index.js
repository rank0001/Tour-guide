export const userInfo = user => {
	// Return an action
	return {
		type: "FETCH_USER",
		payload: user,
	};
};