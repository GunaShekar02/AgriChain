import React, { Component } from 'react';
import './App.css';

import Web3 from 'web3';
import { Keccak } from 'sha3';

import Main from './MainComponent';
import { KISAAN_ABI, KISAAN_ADDRESS } from './config';


class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            account: '',
        }

        this.authorityLogin = this.authorityLogin.bind(this);
        this.officialLogin = this.officialLogin.bind(this);
    }

    componentDidMount(){
        // const hash = new Keccak(256);
        // hash.update('hello');
        // console.log(hash.digest('hex'));
        this.loadBlockchainData();

    }

    async loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
        const accounts = await web3.eth.getAccounts();
        this.setState({account : accounts[0]});
        const kisaan = new web3.eth.Contract(KISAAN_ABI, KISAAN_ADDRESS);
        this.setState({kisaan});
        console.log(kisaan.events.authorityLoginSuccessful);
        // this.addOfficial();
        var authorityLoginEvent = this.state.kisaan.events.authorityLoginSuccessful();

        authorityLoginEvent.on('authorityLoginSuccessful',(err, res) => {
            console.log(res.args.success);
        })
    }

    authorityLogin(password){
        const hash = new Keccak(256);
        hash.update(password);
        this.state.kisaan.methods.ownerLogin(hash.digest('hex')).send({from: this.state.account})
        .once('transactionHash', (transactionHash) => {
            console.log(transactionHash);
        })
    }

    officialLogin(password){
        const hash = new Keccak(256);
        hash.update(password);
        this.state.kisaan.methods.ownerLogin(hash.digest('hex')).send({from: this.state.account})
        .once('transactionHash', (transactionHash) => {
            console.log(transactionHash);
        })
    }

    addOfficial(){
        console.log("LOL")
        this.state.kisaan.methods.addOfficial("0x148679B7a2ed3ECD0f1f90f3cDA3796B6449E1eF", "New1", "abc", false).send({from: this.state.account})
        .once('transactionHash', (transactionHash) => {
            console.log(transactionHash);
        })
    }

    render(){
        

        return (
            <Main authorityLogin={this.authorityLogin} officialLogin={this.officialLogin}/>
        );
    }
}

export default App;
