import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
const SajekBooking = ({ data }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item lg={6} sm={12} xs={12} md={6}>
					<h1>{data.sajekDummyData.title}</h1>
					<p>{data.sajekDummyData.details}</p>
				</Grid>
				<Grid item lg={6} sm={12} xs={12} md={6}>
					<form className={classes.root} noValidate autoComplete="off">
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
							defaultValue={data.sajekDummyData.title}
							variant="outlined"
							size="medium"
						/>
						<br />
						<TextField
							id="date"
							label="From"
							type="date"
							defaultValue="2017-05-24"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<TextField
							id="date"
							label="To"
							type="date"
							defaultValue="2017-05-24"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
						/>
                        <br/>
						<Button variant="contained" color="primary" onClick={()=>console.log('clicked!')} >
							Start Booking
						</Button>
					</form>
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return { data: state.rootReducer };
};

export default connect(mapStateToProps)(SajekBooking);
