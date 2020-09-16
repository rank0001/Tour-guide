import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
const Home = () => {
	return (
		<Container >
			<Row>
				<Col>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit
					incidunt, atque totam qui, blanditiis, numquam quod quae minus quas
					dolorum labore nihil aut amet asperiores ipsam reiciendis obcaecati a.
				</Col>
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="/images/sajek.png?text=Cox Bazar" />
					</Card>
				</Col>
				<Col>
                <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/images/sreemongol.png?text=Cox Bazar" /></Card>
                </Col>
				<Col>
                <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="/images/sundorbon.png?text=Cox Bazar" /></Card>
                </Col>
			</Row>
		</Container>
	);
};

export default Home;
