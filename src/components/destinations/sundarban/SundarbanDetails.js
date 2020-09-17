import React from "react";
import { Row, Col, Container, Figure } from "react-bootstrap";
import { connect } from "react-redux";
import SundarbanMap from "./SundarbanMap";
//import {Redirect} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
//import GoogleMap from "../../map/GoogleMap";
const SundarbanDetails = ({data,userInfo}) => {
	const history = useHistory();
    const logInInfo = userInfo.user.isSignedIn;
    if(!logInInfo){
		const location = {
			pathname: '/signIn',
			state: { from: '/booking/sundarban/details' }
		  }
		  
		  history.push(location);
	}
    
	return (
		<div>
			<Container>
				<Row>
					<Col lg={8} md={6} sm={12}>
					
						<Row>
						
							<Col lg={6} md={3} sm={6} >
							<h3 >Stay in {data.sundarbanDummyData.title}</h3>
								<Figure>
									<Figure.Image
										width={200}
										height={400}
										alt="171x180"
										src="../../images/room2.png"
									/>
								</Figure>
							</Col>
							<Col lg={2} md={3} sm={6}>
							<p className="lead" style={{fontSize :'14px'}}> {data.sundarbanDummyData.hotel1.title}</p>
							<p className="lead" style={{fontSize :'14px'}}> {data.sundarbanDummyData.hotel1.guests}</p>
							
							</Col> 
							
						</Row>

						<Row>
							<Col lg={6} md={3} sm={6}>
								<Figure>
									<Figure.Image
										width={200}
										height={400}
										alt="171x180"
										src="../../images/room3.png"
									/>
								</Figure>
							</Col>
							<Col lg={2} md={3} sm={6}>
							<p className="lead" style={{fontSize :'14px'}}> {data.sundarbanDummyData.hotel2.title}</p>
							<p className="lead" style={{fontSize :'14px'}}> {data.sundarbanDummyData.hotel2.guests}</p>
							</Col>
						</Row>
						<Row>
							<Col lg={6} md={3} sm={6}>
								<Figure>
									<Figure.Image
										width={200}
										height={400}
										alt="171x180"
										src="../../images/rooms4.png"
									/>
								</Figure>
							</Col>
							<Col lg={2} md={3} sm={6}>
							<p className="lead" style={{fontSize :'14px'}}> {data.sundarbanDummyData.hotel3.title}</p>
							<p className="lead" style={{fontSize :'14px'}}> {data.sundarbanDummyData.hotel3.guests}</p>
							</Col>
						</Row>
					</Col>

					<Col lg={4} md={6} sm={12}>
						<h2>Location</h2>
                        <SundarbanMap/>
					</Col>
				</Row>
			</Container>
		</div>

	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return { data: state.rootReducer,userInfo:state.user };
};

export default connect(mapStateToProps)(SundarbanDetails);
