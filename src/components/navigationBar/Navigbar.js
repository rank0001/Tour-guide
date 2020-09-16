import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
const Navigbar = () => {
    const handleClick = ()=>{
        console.log('clicked');
    }
	return (
		<Navbar bg="light" variant="light">
			<Navbar.Brand href="#home">
				<img
					src="/logo.png"
					width="30"
					height="30"
					className="d-inline-block align-top"
					alt="React Bootstrap logo"
				/>
			</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="#features">Destination</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link>
			</Nav>
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button onClick={handleClick} variant="outline-primary">
					Login
				</Button>
			</Form>
		</Navbar>
	);
};

export default Navigbar;
