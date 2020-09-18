import React from "react";
import { Typography } from "@material-ui/core";

export default function NoRoutes() {
	return (
		<div>
			<Typography align="center" variant="h4" style={{ marginTop: "100px" }}>
				Sorry,You have come to the wrong page
				<br />
				Please Check your URL
			</Typography>
		</div>
	);
}
