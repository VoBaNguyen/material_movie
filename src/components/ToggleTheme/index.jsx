import { createStyles, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(theme => createStyles({
	toggleTheme: {
		position: "fixed",
		bottom: 30,
		left: 10,
		zIndex: 100,
        color: theme.palette.secondary.contrastText,
		backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
        }
	},
}))


const ToggleTheme = (props) => {
    const classes = useStyles()
    return (
        <IconButton
            className={classes.toggleTheme}
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={props.onClick}>
            {props.icon}
        </IconButton>
    );
}

export default ToggleTheme;
