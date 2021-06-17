import { Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Slider from "react-slick";
import { Button } from "@material-ui/core"

const useStyles = makeStyles({
    carouselList: {
        marginRight: -10,
        marginLeft: -10,
        "& .slick-list": {
            paddingTop: 10,
            
        },
        "& .slick-slide": {
            paddingLeft: "10px",
            paddingRight: "10px",
            boxSizing: "border-box",
        }
    },
    carouselItem: {
        padding: 0,
        transition: "all .4s ease",
        "&:hover": {
            transform: "translate(0, -5px)",
        }
    }
})


const CarouselComponent = () => {
    const breakPoints = {
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
    }
    const classes = useStyles()
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: breakPoints.lg,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: breakPoints.md,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    const renderCarouselSlide = () => {
        return [1,2,3,4,5,6,7,8,9,10,11,12].map((num,index) => {
            return (
                <Card className={classes.carouselItem}>
                    <CardActionArea>
                        <CardMedia
                        image="https://picsum.photos/300/350"
                        title="Slider"
                        style={{height: "350px"}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="p">Movie Name</Typography>
                            <Typography gutterBottom variant="subtitle1" component="p">120 phút</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )
        })
    }

    return (
        <Slider {...settings} className={classes.carouselList}>
            {renderCarouselSlide()}
        </Slider>
    );
}

export default CarouselComponent;
