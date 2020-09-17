import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import firebase from "../../FirebaseConfig";
import { userInfo } from "../../actions";
import { useHistory,Link } from "react-router-dom";
import './Navigbar.css';
const Navigbar = (props) => {
    const history = useHistory();
	const user = props.userDetails.user.isSignedIn;
	console.log(props.userDetails.user.name);
	const handleSignIn = () => {
        console.log("clicked");
        history.push('./signIn');
	};

	const handleSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then(function () {
				console.log("signed out");
				const signedOutUser = {
					user: { isSignedIn: false, name: null },
				};
				props.userInfo(signedOutUser);
				history.push('/signIn');
			});
	};

	return (
		<Navbar  variant="light">
			<Navbar.Brand href="#home">
				<img
					src="/logo.png"
					width="150"
					height="50"
					className="d-inline-block align-top ml-5"
					alt="React Bootstrap logo"
				/>
			</Navbar.Brand>
			<Nav className="mr-auto">
			<Nav.Link>
							<Link to="/">Home</Link>
						</Nav.Link>
				
				{user?
				(
					<Nav.Link >Logged in as {props.userDetails.user.name}</Nav.Link>
				):(
					<Nav.Link >Viewing as a guest</Nav.Link>
				)}
				
			</Nav>
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" /> 
                {user? 
                (
                    <Button onClick={handleSignOut} variant="outline-primary">
					Logout
				</Button>

                ):
                (
                    <Button onClick={handleSignIn} variant="success">
					Login
				</Button>
				
                )}
				
			</Form>
		</Navbar>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return { userDetails: state.user };
};
export default connect(mapStateToProps, { userInfo })(Navigbar);
