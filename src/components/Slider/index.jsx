import { Grid, makeStyles, Button } from '@material-ui/core';
import React from 'react';
import Slider from "react-slick";


const topDown = {
    transform: "translateY(-100%)",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
}

const topDownActive = {
    transform: "translateY(0)",
    opacity: 1,
    visibility: "visible",
}

const leftRight = {
    transform: "translateX(-100%)",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
}

const leftRightActive = {
    transform: "translateX(0)",
    opacity: 1,
    visibility: "visible",
}

const rightLeft = {
    transform: "translateX(100%)",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
}

const rightLeftActive = {
    transform: "translateX(0)",
    opacity: 1,
    visibility: "visible",
}

const useStyles = makeStyles({
    sliderItem: {
        backgroundColor: "#1a1c20",
        paddingLeft: 15,
        paddingRight: 15,
        "& img": {
            height: "100%",
            maxHeight: 600
        }
    },
    description: {
        paddingLeft: 80,
        paddingRight: 80,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "& h1": {
            fontSize: "4rem",
            lineHeight: "4rem",
            margin: 0
        },
        "& p": {
            color: "#85878c",
            marginTop: "2rem",
            marginBottom: "2rem",
        }
    },
    btnBuy: {
        width: "35%",
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 20,
        color: "#000",
        "& span": {
            fontWeight: 700,
        },
        "&:hover": {
            color: "#fff"
        }
    },
    /**
     * Animation
     */
    sliderContainer: {
        "& .slick-prev": {
            ...leftRight,
            left: 25,
            zIndex: 1,
        },
        "& .slick-next": {
            ...rightLeft,
            right: 25,
        },
        "&:hover": {
            "& .slick-prev": leftRightActive,
            "& .slick-next": rightLeftActive,
        },
        "& .slick-active": {            
            "& .topDown": topDownActive,
            "& .leftRight": leftRightActive,
            "& .rightLeft": rightLeftActive
        },
        "& .slick-slide.slick-active": {
            zIndex: 1
        }
    },
    topDown,
    leftRight,
    rightLeft,

})


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
                <div>
                    <Grid container className={classes.sliderItem}>
                        <Grid item xs={6} className={classes.description}>
                            <h1 className={"topDown" + " " + classes.topDown}>JBL E55BT Over-Ear Wireless Headphones</h1>
                            <p className={"leftRight" + " " + classes.leftRight}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Totam consequatur rerum reiciendis fugit? Impedit ut saepe 
                                reprehenderit eaque ipsa debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aperiam.</p>
                            <Button variant="contained" color="secondary" className={classes.btnBuy + " " + "leftRight" + " " + classes.leftRight}>
                                BUY NOW
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={item.image} alt="Slider" className={"rightLeft" + " " + classes.rightLeft}/>
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
