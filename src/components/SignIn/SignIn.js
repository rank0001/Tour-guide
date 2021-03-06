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
import firebase from "../../FirebaseConfig";
import { userInfo } from "../../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import CopyrightComp from "../Copyright/CopyrightComp";
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
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignIn = (props) => {
	let location;
	if (props.location.state) location = props.location.state.from;
	else location = "/";
	const [user, setUser] = useState({
		email: null,
		password: null,
		error: "",
	});
	const history = useHistory();
	const provider = new firebase.auth.GoogleAuthProvider();
	const providerFacebook = new firebase.auth.FacebookAuthProvider();
	const handleSignInWithGoogle = (e) => {
		e.preventDefault();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				
				const { displayName } = result.user;
				const signedInUser = {
					user: {
						isSignedIn: true,
						name: displayName,
					},
				};
				props.userInfo(signedInUser);
				history.push(location);
			})
			.catch(function (error) {
				// Handle Errors here.
				const errorMessage = error.message;
				const newUserInfo = { ...user };
				newUserInfo.error = errorMessage;
				setUser(newUserInfo);
			});
	};

	const handleBlur = (e) => {
		const newUserInfo = { ...user };
		newUserInfo[e.target.name] = e.target.value;
		newUserInfo.error = "";
		setUser(newUserInfo);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user.email && user.password) {
			firebase
				.auth()
				.signInWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					const signedInUser = {
						user: {
							isSignedIn: true,
							name: res.user.displayName,
						},
					};
					props.userInfo(signedInUser);
					history.push(location);
				})
				.catch(function (error) {
					// Handle Errors here.
					const errorMessage = error.message;
					const newUserInfo = { ...user };
					newUserInfo.error = errorMessage;
					setUser(newUserInfo);
				});
		} else {
			const newUserInfo = { ...user };
			newUserInfo.error = "you must provide credentials to login";
			setUser(newUserInfo);
		}
	};

	const handleSignInWithFacebook = (e) => {
		e.preventDefault();
		firebase
			.auth()
			.signInWithPopup(providerFacebook)
			.then(function (result) {
				const { displayName } = result.user;
				const signedInUser = {
					user: {
						isSignedIn: true,
						name: displayName,
					},
				};
				props.userInfo(signedInUser);
				history.push(location);
			})
			.catch(function (error) {
				const errorMessage = error.message;
				const newUserInfo = { ...user };
				newUserInfo.error = errorMessage;
				setUser(newUserInfo);
			});
	};

	const classes = useStyles();
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form onSubmit={handleSubmit} className={classes.form} noValidate>
					<TextField
						onBlur={handleBlur}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						onBlur={handleBlur}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<p style={{ color: "red" }}>{user.error}</p>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
					</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSignInWithGoogle}
					>
						Sign In With Google
					</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSignInWithFacebook}
					>
						Sign In With Facebook
					</Button>
					<Grid container>
						<Grid item xs>
							<Link variant="body2">Forgot password?</Link>
						</Grid>
						<Grid item>
							<Link href="/signup" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<CopyrightComp />
			</Box>
		</Container>
	);
};
const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps, { userInfo })(SignIn);
