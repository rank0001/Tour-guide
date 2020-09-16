import React from "react";
import { Row, Col, Container, Figure } from "react-bootstrap";
import { connect } from "react-redux";
//import GoogleMap from "../../map/GoogleMap";
import SreemangalMap from "./SreemangalMap";
const SreeMangalDetails = ({ data }) => {
	return (
		<div>
			<Container>
				<Row>
					<Col lg={8} md={6} sm={12}>
						<h3>Stay in {data.sajekDummyData.title}</h3>
						<Row>
							<Col lg={4} md={3}>
								<Figure>
									<Figure.Image
										width={171}
										height={180}
										alt="171x180"
										src="../../images/room2.png"
									/>
								</Figure>
							</Col>
							<Col lg={4} md={3}>
								<h3>cool working</h3>
							</Col>
						</Row>

						<Row>
							<Col lg={4} md={3}>
								<Figure>
									<Figure.Image
										width={171}
										height={180}
										alt="171x180"
										src="../../images/room3.png"
									/>
								</Figure>
							</Col>
							<Col lg={4} md={3}>
								<h3>cool working</h3>
							</Col>
						</Row>
						<Row>
							<Col lg={4} md={3}>
								<Figure>
									<Figure.Image
										width={171}
										height={180}
										alt="171x180"
										src="../../images/rooms4.png"
									/>
								</Figure>
							</Col>
							<Col lg={4} md={3}>
								<h3>cool working</h3>
							</Col>
						</Row>
					</Col>

					<Col lg={4} md={6} sm={12}>
						<h2>good job</h2>
                        <SreemangalMap/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return { data: state.rootReducer };
};

export default connect(mapStateToProps)(SreeMangalDetails);
