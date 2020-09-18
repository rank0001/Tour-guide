import React from "react";
import SreemangalMap from "./SreemangalMap";
import { Col } from "react-bootstrap";
export default function MapDetails() {
	return (
		<Col lg={4} md={6} sm={12} xs={6}>
			<h2 className="mt-5">Location</h2>
			<SreemangalMap />
		</Col>
	);
}
