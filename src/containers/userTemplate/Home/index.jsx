import React from 'react';
import { makeStyles } from '@material-ui/core';
import NavbarUser from '../../../components/Navbar/NavbarUser';
import { Container, createStyles } from "@material-ui/core"
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
            <h1>Showing movie</h1>
            <CarouselComponent />
            <h1>Coming movie</h1>
            <CarouselComponent />
          </Container>
        </Container>
    );
}

export default Home;
