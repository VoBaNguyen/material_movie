import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormSignUp from '../FormSignUp';

const ModalDialog = ({open, handleClose}) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <FormSignUp handleClose={handleClose} />
        </Dialog>
    );
}

export default ModalDialog;
