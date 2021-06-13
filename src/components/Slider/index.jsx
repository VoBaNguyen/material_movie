import { makeStyles } from '@material-ui/core';
import React from 'react';
import Slider from "react-slick";

const useStyles = makeStyles({
    sliderItem: {
        "& img": {
            display: "block",
            width: "100%",
        }
    }
})


const SliderComponent = () => {
    const classes = useStyles()
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const renderSlickSlide = () => {
        return [1,2,3,4,5,6].map((num,index) => {
            return (
                <div className={classes.sliderItem}>
                    <img src="https://picsum.photos/1900/500" alt="Slider" />
                </div>
            )
        })
    }

    return (
        <Slider {...settings}>
            {renderSlickSlide()}
        </Slider>
    );
}

export default SliderComponent;
