import React from "react";
import { Row, Col, Container, Figure, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Home.css";
const Home = () => {
	const history = useHistory();
	const handleClick = (e) => {
		const data = parseInt(e.target.getAttribute("data-id"));
		if (data === 1) history.push("/booking/sajek");
		else if (data === 2) history.push("/booking/sreemangal");
		else history.push("/booking/sundarban");
	};

	return (
		<div className="home">
			<Container>
				<Row className="cards">
					<Col lg={3} md={3} sm={12} className="mt-5">
						<h1 className="title">Travel Guide</h1>
						<h4 className="detail">
							“THE WORLD IS A BOOK AND THOSE WHO DO NOT TRAVEL READ ONLY A
							PAGE.” ~ SAINT AUGUSTINE
						</h4>
						<Button variant="warning">Start Booking</Button>
					</Col>
					<Col lg={3} md={3} sm={12} className="mt-5">
						<Figure>
							<Figure.Image
								data-id="1"
								onClick={handleClick}
								width={171}
								height={180}
								alt="171x180"
								src="/images/sajek2.png"
							/>
							<Figure.Caption>
								<h3 className="place text-center">Sajek</h3>
							</Figure.Caption>
						</Figure>
					</Col>
					<Col lg={3} md={3} sm={12} className="mt-5">
						<Figure>
							<Figure.Image
								data-id="2"
								onClick={handleClick}
								width={171}
								height={180}
								alt="171x180"
								src="/images/sreemongol.png"
							/>
							<Figure.Caption>
								<h3 className="text-center place">Sreemangal</h3>
							</Figure.Caption>
						</Figure>
					</Col>
					<Col lg={3} md={3} sm={12} className="mt-5">
						<Figure>
							<Figure.Image
								data-id="3"
								onClick={handleClick}
								width={171}
								height={180}
								alt="171x180"
								src="/images/sundorbon.png"
							/>
							<Figure.Caption>
								<h3 className="text-center place">Sundarban</h3>
							</Figure.Caption>
						</Figure>
					</Col>
				</Row>
				<h3 className="text-center click">
					Click on the images to select the respective destinations
				</h3>
			</Container>
		</div>
	);
};

export default Home;
