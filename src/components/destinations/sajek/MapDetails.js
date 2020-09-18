import React from "react";
import { Col } from "react-bootstrap";
import SajekMap from "./SajekMap";
export default function MapDetails() {
	return (
		<Col lg={4} md={6} sm={12}>
			<h2 className="mt-5">Location</h2>
			<SajekMap />
		</Col>
	);
}
