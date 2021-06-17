import { makeStyles } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import DrawerComponent from './Drawer';
import ToolbarComponent from './Toolbar';

const useStyles = makeStyles({
    navWrapper: {
        position: "fixed",
        width: "100%",
        height: 60,
        zIndex: 10
    }
})

const NavbarUser = () => {
    let [state, setState] = useState({ left: false })
    const openDrawer = () => setState({left: !state.left})
    const toggleDrawer = () => setState({left:!state.left})
    const classes = useStyles()
    return (
        <div className={classes.navWrapper}>
            <ToolbarComponent openDrawerHandler={openDrawer}>
            <h1>This is navbar user</h1>
            </ToolbarComponent>
            <DrawerComponent left={state.left} toggleDrawerHandler={toggleDrawer}>
            </DrawerComponent>
        </div>
    );
}

export default NavbarUser;
