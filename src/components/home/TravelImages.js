import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Card, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	cardRoot: {
		maxWidth: 345,
	},
	media: {
		height: "300px",
		paddingTop: "56.25%", // 16:9
	},

}));

export default function TravelImages({ state, img }) {
	const classes = useStyles();
	return (
		<div>
			{state === "true" ? (
				<CardMedia
					className={classes.media}
					image={img}
					title="Paella dish"
					style={{ border: "5px solid yellow" }}
				/>
			) : (
				<CardMedia className={classes.media} image={img} title="Paella dish" />
			)}
		</div>
	);
}
