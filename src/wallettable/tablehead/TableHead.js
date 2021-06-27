import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({

    tableTopLeftCornerCell : {
        background : '#ff001f',
        color: 'white',
        fontWeight : 'bold',
        width : 160,
        borderTopLeftRadius : 10,
        fontSize : 20
    },
    tableTopRightCornerCell : {
        background : '#ff001f',
        color: 'white',
        fontWeight : 'bold',
        width : 160,
        borderTopRightRadius : 10,
        fontSize : 20
    },
    tableHeadCell : {
        background : '#ff001f',
        color: 'white',
        fontWeight : 'bold',
        width : 160,
        fontSize : 20
    },
    
});

const TableHeaderRow = () => {
    const classes = useStyles()

    return (
            <TableHead>
                <TableRow>
                    <TableCell align = 'center' className = {classes.tableTopLeftCornerCell}>ID</TableCell>
                    <TableCell align = 'center' className = {classes.tableHeadCell}>Name</TableCell>
                    <TableCell align = 'center' className = {classes.tableHeadCell}>Balance</TableCell>
                    <TableCell align = 'center' className = {classes.tableHeadCell}>Add Money</TableCell>
                    <TableCell align = 'center' className = {classes.tableHeadCell}>Withdraw Money</TableCell>
                    <TableCell align = 'center' className = {classes.tableTopRightCornerCell}>Remove Wallet</TableCell>
                </TableRow>
            </TableHead>
    )
}

export default TableHeaderRow
