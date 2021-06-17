import React from 'react';
import { makeStyles } from '@material-ui/core';
import NavbarUser from '../../../components/Navbar/NavbarUser';
import { Container, createStyles, Typography } from "@material-ui/core"
import SliderComponent from '../../../components/Slider';
import CarouselComponent from '../../../components/Carousel';


const useStyles = makeStyles( theme => createStyles({

}))

const Home = () => {
    return (
        <Container maxWidth={false} disableGutters>
          <NavbarUser />
          <SliderComponent />
          <Container>
            <Typography variant="h4" component="p">Now Showing</Typography>
            <CarouselComponent />
            <Typography variant="h4" component="p">Coming Soon</Typography>
            <CarouselComponent />
          </Container>
        </Container>
    );
}

export default Home;
