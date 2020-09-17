import React from "react";
import { Row, Col, Container, Figure } from "react-bootstrap";
import { connect } from "react-redux";
//import {Redirect} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
//import GoogleMap from "../../map/GoogleMap";
import SreemangalMap from "./SreemangalMap";
const SreeMangalDetails = ({ data,userInfo }) => {
	const history = useHistory();
    const logInInfo = userInfo.user.isSignedIn;
    if(!logInInfo){
		const location = {
			pathname: '/signIn',
			state: { from: '/booking/sreemangal/details' }
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
							<h3 >Stay in {data.sreemangalDummyData.title}</h3>
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
							<p className="lead" style={{fontSize :'14px'}}> {data.sreemangalDummyData.hotel1.title}</p>
							<p className="lead" style={{fontSize :'14px'}}> {data.sreemangalDummyData.hotel1.guests}</p>
							
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
							<p className="lead" style={{fontSize :'14px'}}> {data.sreemangalDummyData.hotel2.title}</p>
							<p className="lead" style={{fontSize :'14px'}}> {data.sreemangalDummyData.hotel2.guests}</p>
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
							<p className="lead" style={{fontSize :'14px'}}> {data.sreemangalDummyData.hotel3.title}</p>
							<p className="lead" style={{fontSize :'14px'}}> {data.sreemangalDummyData.hotel3.guests}</p>
							</Col>
						</Row>
					</Col>

					<Col lg={4} md={6} sm={12}>
						<h2>Location</h2>
                        <SreemangalMap/>
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

export default connect(mapStateToProps)(SreeMangalDetails);
