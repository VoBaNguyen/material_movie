import React, { useState } from 'react';
import { TextField, Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
    }
}));



const FormSignUp = (props) => {
    const { handleClose } = props
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(firstName, lastName, email, password);
        handleClose();
    };

    const classes = useStyles()
    return (
        <form className={classes.root}>
            <Typography variant="h5" component="h2" className={classes.title}>
                SIGN UP
            </Typography>
            <TextField label="First Name" 
                        variant="filled" 
                        color="textSecondary"
                        required
                        onChange={e => setFirstName(e.target.value)}
                        />
            <TextField label="Last Name" 
                        variant="filled" 
                        color="textSecondary"
                        required
                        onChange={e => setLastName(e.target.value)}
                        />
            <TextField label="Email" 
                        variant="filled" 
                        type="email" 
                        color="textSecondary"
                        required 
                        onChange={e => setEmail(e.target.value)}
                        />
            <TextField label="Password" 
                        variant="filled" 
                        type="password" 
                        color="textSecondary"
                        required 
                        onChange={e => setPassword(e.target.value)}
                        />
            <div>
                <Button variant="contained"
                        onClick={handleClose}
                        >
                    Cancel
                </Button>
                <Button type="submit" 
                        variant="contained" 
                        color="primary"
                        onSubmit={handleSubmit}
                        >
                    Signup
                </Button>
            </div>
        </form>
    );
}

export default FormSignUp;
