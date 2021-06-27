import React from 'react'
import { Button, TableCell, TableRow } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import { useState, useEffect } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const AddMoney = ({wallet}) => {
    //const [userToUpdate, setUserToUpdate] = useState()
    const [openUpdate, setOpenUpdate] = React.useState(false);

    const handleUpdate = () => {
      //  setUserToUpdate(user)
        setOpenUpdate(true);
    }

    const handleCloseUpdate = () => {
        setOpenUpdate(false)
    }

    return (
            <TableCell align="center">
                <AddCircleIcon  onClick = {() => handleUpdate()}/>
                <Modal
                    open = {openUpdate}
                    onClose={handleCloseUpdate}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                        <label> Enter Amount </label>
                        <input type = "number"/>
                        <Button>Add </Button>
                        <Button>Cancel</Button>
                        
                </Modal>
            </TableCell>
    )
}

export default AddMoney