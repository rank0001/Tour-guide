import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card,Typography} from "@material-ui/core";
import TravelImages from "./TravelImages";
import TravelQuotes from "./TravelQuotes";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	cardRoot: {
		maxWidth: 345,
	},
}));

const Home = () => {
	const classes = useStyles();
	const history = useHistory();

	const handleClick = (e) => {
		const data = parseInt(e.target.getAttribute("data-id"));
		if (data === 1) history.push("/booking/sajek");
		else if (data === 2) history.push("/booking/sreemangal");
		else history.push("/booking/sundarban");
	};

	const [state, setstate] = useState(0);
	
	const handleNext = () => {
		if (state === 2) setstate(0);
		else setstate((state) => state + 1);
	};

	const handlePrev = () => {
		if (state === 0) setstate(2);
		else setstate((state) => state - 1);
	};

	return (
		<div>
			<div className={classes.root}>
				<Grid container spacing={2} style={{ marginTop: "20px" }}>
					<Grid item lg={3} md={3} sm xs>
						<TravelQuotes/>
					</Grid>

					<Grid item lg={3} md={3} sm xs>
						<Card className={classes.cardRoot}>
							{state === 0 ? (
								<TravelImages state="true" img="/images/sajek.png" />
							) : (
								<TravelImages state="false" img="/images/sajek.png" />
							)}
							
						</Card>
					</Grid>

					<Grid item lg={3} md={3} xs>
						<Card className={classes.cardRoot}>
							{state === 1 ? (
								<TravelImages state="true" img="/images/sreemongol.png" />
							) : (
								<TravelImages state="false" img="/images/sreemongol.png" />
							)}
						</Card>
					</Grid>
					<Grid item lg={3} md={3} xs>
						<Card className={classes.cardRoot}>
							{state === 2 ? (
								<TravelImages state="true" img="/images/sundorbon.png" />
							) : (
								<TravelImages state="false" img="/images/sundorbon.png" />
							)}
						</Card>
					</Grid>
				</Grid>

				<div style={{ textAlign: "center", padding: "20px" }}>
					<button className="button" onClick={handlePrev}>
						Prev
					</button>
					<button className="button" onClick={handleNext}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
