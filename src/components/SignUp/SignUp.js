import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { userInfo } from "../../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import firebase from "../../FirebaseConfig";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Tour guide
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignUp = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const [user, setUser] = useState({
		firstName: null,
		lastName: null,
		email: null,
		error: "",
	});

	const handleBlur = (e) => {
		let firstName, email, lastName;
		if (e.target.name === "firstName") firstName = e.target.value;
		if (e.target.name === "lastName") lastName = e.target.value;
		if (e.target.name === "email") email = e.target.value;
		const newUserInfo = { ...user };
		newUserInfo[e.target.name] = e.target.value;
		setUser(newUserInfo);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (user.password && user.email) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					console.log(res);
					const signedInUser = {
						user: {
							isSignedIn: true,
							name: user.firstName,
						},
					};
					props.userInfo(signedInUser);

					console.log(res);
					updateUserName(user.firstName);
					history.push("/");
				})
				.catch(function (error) {
					const errorMessage = error.message;
					console.log(errorMessage);
					const newUserInfo = { ...user };
					newUserInfo.error = errorMessage;
					setUser(newUserInfo);
				});
		}
	};

	const updateUserName = (name) => {
		const user = firebase.auth().currentUser;

		user
			.updateProfile({
				displayName: name,
				photoURL: "https://example.com/jane-q-user/profile.jpg",
			})
			.then(function () {
				// Update successful.
				console.log("username updated!");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form onSubmit={handleSubmit} className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								onBlur={handleBlur}
								autoComplete="fname"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								onBlur={handleBlur}
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="lname"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onBlur={handleBlur}
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onBlur={handleBlur}
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onBlur={handleBlur}
								variant="outlined"
								required
								fullWidth
								name="passwordConfirm"
								label="Confirm password"
								type="password"
								id="password"
							/>
						</Grid>
						<Grid item xs={12}>
						<p style={{color:"red"}}>{user.error}</p>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/signin" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
				
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
};
const mapStateToProps = (state) => {
	console.log("from register", state);
	return { user: state.user };
};

export default connect(mapStateToProps, { userInfo })(SignUp);
