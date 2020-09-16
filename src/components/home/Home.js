import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history  = useHistory();

	const handleClick = (e) => {
        const data = parseInt( e.target.getAttribute("data-id"));
         if(data===1)
             history.push('/booking/sajek');
         else if(data===2)
            history.push('/booking/sreemangal');
         else
             history.push('/booking/sundarban');    
    }

	return (
		<Container>
			<Row>
				<Col>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit
					incidunt, atque totam qui, blanditiis, numquam quod quae minus quas
					dolorum labore nihil aut amet asperiores ipsam reiciendis obcaecati a.
				</Col>
				<Col>
					<Card onClick={handleClick} style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							data-id="1"
							src="/images/sajek.png"
						/>
					</Card>
				</Col>
				<Col>
					<Card onClick={handleClick} style={{ width: "18rem" }}>
						<Card.Img
							data-id="2"
							variant="top"
							src="/images/sreemongol.png"
							text="sajek"
						/>
					</Card>
				</Col>
				<Col>
					<Card onClick={handleClick} style={{ width: "18rem" }}>
						<Card.Img
							data-id="3"
							variant="top"
							src="/images/sundorbon.png"
						/>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
