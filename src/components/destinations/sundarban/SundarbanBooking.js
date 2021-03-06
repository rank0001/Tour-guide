import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,

		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: 200,
		},
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));
const SunderbanBooking = ({ data }) => {
	const classes = useStyles();
	const history = useHistory();
	const handleClick = () => {
		history.push("/booking/sundarban/details");
	};
	return (
		<div className={classes.root}>
			<Grid container justify="space-around">
				<Grid item lg={4} sm={12} xs={12} md={4}>
					<Typography
						variant="h2"
						color="primary"
						style={{ marginTop: "40px" }}
					>
						{data.sundarbanDummyData.title}
					</Typography>
					<Typography variant="body1">
						{data.sundarbanDummyData.details}
					</Typography>
				</Grid>
				<Grid item alignContent="flex-end" lg={4} sm={12} xs={12} md={4}>
					<Box component="span" mt={2}>
						<form
							className={classes.root}
							noValidate
							autoComplete="off"
							style={{ marginTop: "40px" }}
						>
							<TextField
								label="Origin"
								id="outlined-size-normal"
								defaultValue="Dhaka"
								variant="outlined"
								size="medium"
							/>
							<br />
							<TextField
								label="Destination"
								id="outlined-size-normal"
								defaultValue={data.sundarbanDummyData.title}
								variant="outlined"
								size="medium"
							/>

							<br />

							<TextField
								id="date"
								label="From"
								type="date"
								defaultValue="2020-05-24"
								className={classes.textField}
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="date"
								label="To"
								type="date"
								defaultValue="2020-07-24"
								className={classes.textField}
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<br />
							<Box mt={2} justify="center">
								<Button
									variant="contained"
									color="primary"
									onClick={handleClick}
								>
									Start Booking
								</Button>
							</Box>
						</form>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { data: state.rootReducer };
};
export default connect(mapStateToProps)(SunderbanBooking);
