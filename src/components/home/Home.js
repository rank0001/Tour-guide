import React,{useState} from "react";
import { Row, Col, Container, Figure, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Card, CardMedia,Typography } from "@material-ui/core";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	cardRoot: {
		maxWidth: 345,
	},
	media: {
		height: "300px",
		paddingTop: "56.25%", // 16:9
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
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

	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		swipeToSlide: true,
		//autoplay: true,
		focusOnSelect: true,
		slidesToScroll: 1,
		arrows: true,
		afterChange: (e) =>console.log(e),
		beforeChange: (current, next) => console.log(current,next)
	};


	const settings2= {
		dots: true,
		infinite: true,
		speed: 1000,
		fade:true,
		slidesToShow: 1,
		swipeToSlide: true,
		autoplay: true,
		focusOnSelect: true,
		slidesToScroll: 1,
		arrows: true,
	};

	const [state, setstate] = useState(0);

	const handleNext = () => {
		if (state === 2) setstate(0);
		else setstate(state=>state+1);
	};

	const handlePrev = () => {
		if (state === 0) setstate(2);
		else setstate(state=>state-1)
	
	};


	return (
		<div>
			<div className={classes.root}>
				<Grid container spacing={2} style={{ marginTop: "20px" }}>
					<Grid item lg={3} md={3} sm xs>
						<Slider {...settings2}>
						<div>
						<h1>
							hello welcome click to the cards below for going towards to that
							link
						</h1>
						 
						</div>
						<div>
							
						<h2>
							hello welcome click to the cards below for going towards to that
							link
						</h2>
						
						</div>
						<div> 
						<h3>
							hello welcome click to the cards below for going towards to that
							link
						</h3>
						
						</div>
						</Slider>
					</Grid>

					<Grid item lg={3} md={3}  sm xs>
					
							<Card className={classes.cardRoot}>
								
								{state === 0 ? (
									<CardMedia
										className={classes.media}
										image='./images/sajek.png'
										title="Paella dish"
										style={{ border: "5px solid yellow" }}
									/>
								) : (
									<CardMedia
										className={classes.media}
										image='./images/sajek.png'
										title="Paella dish"
										
									/>
									
								)}
								<Typography variant='h6' style={{marginTop:'-40px',marginLeft:'20px'}}>
									hello boys
								</Typography>
								
							</Card> 
							</Grid>
							
							<Grid item lg={3} md={3}  xs>

							<Card className={classes.cardRoot}>
							{state === 1 ? (
									<CardMedia
										className={classes.media}
										image='./images/sreemongol.png'
										title="Paella dish"
										style={{ border: "5px solid yellow" }}
									/>
								) : (
									<CardMedia
										className={classes.media}
										image='./images/sreemongol.png'
										title="Paella dish"
									
									/>
								)}
							</Card>
							</Grid>		
							<Grid item lg={3} md={3}  xs>
							<Card className={classes.cardRoot}>
							{state === 2 ? (
									<CardMedia
										className={classes.media}
										image='./images/sundorbon.png'
										title="Paella dish"
										style={{ border: "5px solid yellow" ,marginRight:'5px'}}
									/>
								) : (
									<CardMedia
										className={classes.media}
										image='./images/sundorbon.png'
										title="Paella dish"
										style={{marginRight:'5px'}}
										
									/>
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
