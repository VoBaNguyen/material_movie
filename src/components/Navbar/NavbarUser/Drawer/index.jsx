import { createStyles, makeStyles } from '@material-ui/core';
import Drawer from "@material-ui/core/Drawer";
import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";


const useStyles = makeStyles(theme => createStyles({
    drawerContainer: {
        "& .MuiPaper-root": {
            alignItems: "center",
            justifyContent: "center",
        }
    },
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    },
    listItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    navItemText: {
        flex: "0 0 auto",
    },
}))


const DrawerComponent = (props) => {
    const {left, toggleDrawerHandler} = props
    const classes = useStyles()
    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawerHandler}
            onKeyDown={toggleDrawerHandler}
        >
            <List component="nav" aria-label="main mailbox folders">
                <ListItem className={classes.listItem} button>
                    <ListItemText className={classes.navItemText} primary="Lịch Chiếu" />
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <ListItemText className={classes.navItemText} primary="Cụm Rạp" />
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <ListItemText className={classes.navItemText} primary="Tin Tức" />
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <ListItemText className={classes.navItemText} primary="Liên Hệ" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <Drawer anchor="top" open={left} onClose={toggleDrawerHandler} className={classes.drawerContainer}>
            {sideList("left")}
        </Drawer>
    );
}

export default DrawerComponent;
