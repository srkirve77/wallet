import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import WalletTable from '../wallettable/WalletTable';
import PostWallet from '../server-conn/PostWallet';

const useStyles = makeStyles({
    title : {
        marginLeft:700,
    },
    createWalletButton : {
        backgroundColor: '#ff001f',
        marginLeft : 1400,
        fontSize: 16,
        fontWeight: 'bold',
    }

});
  
const Homepage = () => {
    const classes = useStyles()
    return (
        <div>
            <h1 className = {classes.title}>Wallet Application</h1>
            <Button className = {classes.createWalletButton} 
            variant="contained" color="secondary" onClick= {() => PostWallet()}><AddIcon/>Create Wallet</Button>
            <WalletTable></WalletTable>
        </div>
    )
}

export default Homepage;
