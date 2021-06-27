import React from 'react'
import GetAllWallets from '../../server-conn/GetAllWallets'
import { useState, useEffect } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteWalletById from '../../server-conn/DeleteWalletById';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddMoney from '../../addmoney/AddMoney'

const useStyles = makeStyles({
    tablecell : {
        fontSize : 18
    }
})

const WalletList = () => {
    const classes = useStyles()

    const [wallets, setWallets] = useState()
    
    useEffect(() => {
        getAllWallets()
    })

    async function getAllWallets() {
            var data = await GetAllWallets()
            setWallets(data)
    }

    return (
        <TableBody>
            {
                wallets && wallets.map( (wallet) => 
                (
                    <TableRow key = {wallet.id}>
                        <TableCell align="center" className = {classes.tablecell}>{wallet.id}</TableCell>
                        <TableCell align="center" className = {classes.tablecell}>{wallet.name}</TableCell>
                        <TableCell align="center" className = {classes.tablecell}>{wallet.balance}</TableCell>
                        <AddMoney/>
                        <TableCell align="center"><RemoveCircleIcon/></TableCell> 
                        <TableCell align="center"><DeleteForeverIcon onClick = { (wallet) => DeleteWalletById(wallet.id)}/></TableCell>                            
                    </TableRow>
                ))}            
        </TableBody>
    )
}

export default WalletList
