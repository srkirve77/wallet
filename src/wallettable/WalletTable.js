import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import WalletList from './tablebody/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHeaderRow from './tablehead/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
    table : {
    },
    paper : {
        marginLeft : 200,
        marginTop : 50,
        width: 1397,
        height : 700,
        overflowY : 'auto'
    }
    
});

const WalletTable = () => {
    const classes = useStyles();

    useEffect(() => {
        console.log("helo")    
    })
    

    return (
        <Paper className = {classes.paper}>
            <Table className = {classes.table} stickyHeader>
                <TableHeaderRow/>
                <WalletList/>
            </Table>           
        </Paper>

)}

export default WalletTable
