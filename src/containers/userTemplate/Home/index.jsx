import React from 'react';
import { makeStyles } from '@material-ui/core';
import NavbarUser from '../../../components/Navbar/NavbarUser';
import { Container, createStyles, Typography } from "@material-ui/core"
import SliderComponent from '../../../components/Slider';
import CarouselComponent from '../../../components/Carousel';

const useStyles = makeStyles( theme => createStyles({
  title: {
    marginTop: 40,
    marginBottom: 20,
    fontWeight: 200,
  }
}))

const Home = () => {
  const classes = useStyles()
    return (
        <Container maxWidth={false} disableGutters>
          <NavbarUser />
          <SliderComponent />
          <Container>
            <Typography variant="h4" component="h2" color="textPrimary" className={classes.title}>Now Showing</Typography>
            <CarouselComponent />
            <Typography variant="h4" component="h2" color="textPrimary" className={classes.title}>Coming Soon</Typography>
            <CarouselComponent />
          </Container>
        </Container>
    );
}

export default Home;
