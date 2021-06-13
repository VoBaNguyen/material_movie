import { AppBar, Badge, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import useStyles from './style.js';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import NotificationsIcon from "@material-ui/icons/Notifications";

const ToolbarComponent = (props) => {
    const {openDrawerHandler} = props

    const classes = useStyles()
    let [state, setState] = useState({
        anchorEl: false,
        mobileMoreAnchorEl: false
    });

    const handleProfileMenuOpen = event => {
        setState({
        achorEl: event.currentTarget
        });
    };

    const handleMobileMenuClose = () => {
        setState({
        mobileMoreAnchorEl: false
        });
    };

    const handleMenuClose = () => {
        setState({
            achorEl: false,
            mobileMoreAnchorEl: false
        });
    };

    const handleMobileMenuOpen = event => {
        setState({
        mobileMoreAnchorEl: event.currentTarget
        });
    };

    /**
     * Render sub-component
     */
    const isMenuOpen = Boolean(state.anchorEl);
    const menuId = "primary-search-account-menu";
    const mobileMenuId = "primary-search-account-menu-mobile";
    const isMobileMenuOpen = Boolean(state.mobileMoreAnchorEl);

    const renderMenu = () => {
        return (
            <Menu
                anchorEl={state.anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
        );
    }

    const renderMobileMenu = () => {
        return (
            <Menu
                anchorEl={state.mobileMoreAnchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={openDrawerHandler}
                >
                    <MenuIcon />
                </IconButton>

                <Typography className={classes.title} variant="h6" noWrap>
                    Material-UI
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                        }}
                        inputProps={{ "aria-label": "search" }}
                    />
                </div>

                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </div>
            </Toolbar>
            </AppBar>
            {renderMobileMenu()}
            {renderMenu()}
        </div>
    );
}

export default ToolbarComponent;
