import { AppBar, IconButton, List, ListItem, ListItemText, Toolbar } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React from 'react';
import useStyles from './style.js';
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core"


const ToolbarComponent = (props) => {
    const {openDrawerHandler} = props
    const classes = useStyles()
    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <div className="navLeft">
                        <Typography className={classes.title} variant="h6" noWrap>
                            M-UI Cinema
                        </Typography>
                    </div>
                    <div className={classes.navCenter}>
                        <List className={classes.listItem} component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <ListItemText className={classes.navItemText} primary="Lịch Chiếu" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText className={classes.navItemText} primary="Cụm Rạp" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText className={classes.navItemText} primary="Tin Tức" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText className={classes.navItemText} primary="Liên Hệ" />
                            </ListItem>
                        </List>
                    </div>
                    <div className={classes.navRight}>
                        <div className="sectionDesktop">
                            <Button
                                variant="contained"
                                color="secondary"
                            >
                                Sign In
                            </Button>
                        </div>
                        <div className="sectionMobile">
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <AccountCircle />
                            </IconButton>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={openDrawerHandler}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ToolbarComponent;
