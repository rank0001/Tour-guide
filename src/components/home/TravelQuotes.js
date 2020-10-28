import React from 'react';
import {Typography} from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    swipeToSlide: true,
    autoplay: true,
    focusOnSelect: true,
    slidesToScroll: 1,
    arrows: false,
};
export default function TravelQuotes() {
    return (
        
        <div>
        <Slider {...settings}>
        <Typography variant="h3">
            yeah hello brothers you like this? 
        </Typography> 
        <Typography variant="h3">
            yeah hello brothers what are you doing? 
        </Typography> 
        <Typography variant="h3">
            yeah hello brothers whats up? 
        </Typography> 
        </Slider>
        
        </div>
    )
}
