import { Grid, Button, Typography } from '@material-ui/core';
import React from 'react';
import Slider from "react-slick";
import { useStyles } from "./style"

const SliderComponent = () => {
    const classes = useStyles()
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const renderSlickSlide = () => {
        const products = [
            { image:  "./assets/images/BLACK_1605x1605px.png",
              descr: "lorem"},
            { image:  "./assets/images/RED_1605x1605px.webp",
            descr: "lorem"},
            { image:  "./assets/images/Skyblue.png",
            descr: "lorem"},
        ]

        return products.map((item,index) => {
            return (
                <div key={index}>
                    <Grid container className={classes.sliderItem}>
                        <Grid item xs={5} md={6} className={classes.description}>
                            <Typography 
                                component="h1" 
                                variant="h1" 
                                color="textPrimary" 
                                className={`topDown ${classes.topDown}`}
                            >
                                JBL E55BT Over-Ear Wireless Headphones
                            </Typography>
                            <Typography 
                                variant="subtitle1" 
                                component="p"
                                color="textPrimary" 
                                className={`leftRight ${classes.leftRight}`}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Totam consequatur rerum reiciendis fugit? Impedit ut saepe 
                                reprehenderit eaque ipsa debitis. Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Ex, aperiam.
                            </Typography>
                            <Button variant="contained" 
                                color="secondary" 
                                className={`${classes.btnBuy} leftRight ${classes.leftRight}`}
                            >
                                BUY NOW
                            </Button>
                        </Grid>
                        <Grid item xs={7} md={6}>
                            <img src={item.image} alt="Slider" className={`rightLeft ${classes.rightLeft}`}/>
                        </Grid>
                    </Grid>
                </div>
            )
        })
    }

    return (
        <Slider {...settings} className={classes.sliderContainer}>
            {renderSlickSlide()}
        </Slider>
    );
}

export default SliderComponent;
