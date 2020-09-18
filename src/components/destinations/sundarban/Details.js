import React from "react";
import { Row, Col, Container, Figure } from "react-bootstrap";
import SundarbanMap from "./SundarbanMap";
export default function Details({ data }) {
	return (
		<Container>
			<Row>
				<Col lg={8} md={6} sm={12}>
					<h3 className="ml-5 mr-5 mt-5">
						Stay in {data.sundarbanDummyData.title}
					</h3>
					<Row>
						<Col lg={6} md={6} sm={6} xs={6}>
							<Figure>
								<Figure.Image
									width={200}
									height={400}
									alt="171x180"
									src="../../images/room2.png"
								/>
							</Figure>
						</Col>
						<Col lg={6} md={6} sm={6} xs={6}>
							<p className="lead" style={{ fontSize: "14px" }}>
								{data.sundarbanDummyData.hotel1.title}
							</p>
							<p className="lead" style={{ fontSize: "14px" }}>
								{data.sundarbanDummyData.hotel1.guests}
							</p>
							<p className="lead" style={{ fontSize: "14px" }}>
								{data.sundarbanDummyData.hotel1.ratings}
							</p>
							<p className="lead" style={{ fontSize: "14px" }}>
								{data.sundarbanDummyData.hotel1.price}
							</p>
						</Col>
					</Row>

					<Row>
						<Col lg={6} md={6} sm={6} xs={6}>
							<Figure>
								<Figure.Image
									width={200}
									height={400}
									alt="171x180"
									src="../../images/room3.png"
								/>
							</Figure>
						</Col>
						<Col lg={6} md={6} sm={6} xs={6}>
							<p className="lead" style={{ fontSize: "14px" }}>
								{data.sundarbanDummyData.hotel2.title}
							</p>
							<p className="lead" style={{ fontSize: "14px" }}>
								{data.sundarbanDummyData.hotel2.guests}
							</p>
							<p className="lead" style={{ fontSize: "14px" }}>
								{data.sundarbanDummyData.hotel2.ratings}
							</p>
							<p className="lead" style={{ fontSize: "14px" }}>
								{data.sundarbanDummyData.hotel2.price}
							</p>
						</Col>
					</Row>
					<Row>
						<Col lg={6} md={6} sm={6} xs={6}>
							<Figure>
								<Figure.Image
									width={200}
									height={400}
									alt="171x180"
									src="../../images/rooms4.png"
								/>
							</Figure>
						</Col>
						<Col lg={6} md={6} sm={6} xs={6}>
							<p className="lead" style={{ fontSize: "14px" }}>
								{data.sundarbanDummyData.hotel3.title}
							</p>
							<p className="lead" style={{ fontSize: "14px" }}>
								{data.sundarbanDummyData.hotel3.guests}
							</p>

							<p className="lead" style={{ fontSize: "14px" }}>
								{data.sundarbanDummyData.hotel3.ratings}
							</p>
							<p className="lead" style={{ fontSize: "14px" }}>
								{data.sundarbanDummyData.hotel3.price}
							</p>
						</Col>
					</Row>
				</Col>

				<Col lg={4} md={6} sm={12}>
					<h2 className="mt-5">Location</h2>
					<SundarbanMap />
				</Col>
			</Row>
		</Container>
	);
}
