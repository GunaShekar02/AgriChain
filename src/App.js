import React, { Component } from 'react';
import './App.css';

import Web3 from 'web3';
import { Keccak } from 'sha3';
import { Navbar, Nav, NavItem, Card, Button, CardTitle, CardBody, Row, Col, Input } from 'reactstrap';

import Login from './LoginComponent';
import Authority from './AuthorityComponent';
import Official from './OfficialComponent';
import { KISAAN_ABI, KISAAN_ADDRESS } from './config';


class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            account: '',
            authorityLoggedIn: false,
            officialLoggedIn: false,
        }

        this.authorityLogin = this.authorityLogin.bind(this);
        this.officialLogin = this.officialLogin.bind(this);
        this.addOfficial = this.addOfficial.bind(this);
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
        console.log(accounts[0]);
        this.setState({account : accounts[0]});
        const kisaan = new web3.eth.Contract(KISAAN_ABI, KISAAN_ADDRESS);
        this.setState({kisaan});
    }

    authorityLogin(password){
        console.log(this.state.account);
        const hash = new Keccak(256);
        hash.update(password);
        this.state.kisaan.methods.ownerLogin(hash.digest('hex')).send({from: this.state.account})
        .once('transactionHash', (transactionHash) => {
            console.log(transactionHash);
            this.setState({authorityLoggedIn : true});
            this.setState({authorityPassword : hash.digest('hex')});
        })
        .catch(err => console.log("ERROR OCCURRED" + err));
    }


    officialLogin(password){
        const hash = new Keccak(256);
        hash.update(password);
        this.state.kisaan.methods.officialLogin(hash.digest('hex')).send({from: this.state.account})
        .once('transactionHash', (transactionHash) => {
            console.log(transactionHash);
            this.setState({officialLoggedIn : true});
        })
        .catch(err => console.log("ERROR OCCURRED" + err));
    }

    addOfficial(address,name,password,isValidator){
        const hash = new Keccak(256);
        hash.update(password);
        this.state.kisaan.methods.addOfficial(this.state.authorityPassword,address, name, hash.digest('hex'), isValidator).send({from: this.state.account})
        .once('transactionHash', (transactionHash) => {
            console.log(transactionHash);
        })
        .catch(err => console.log("ERROR OCCURRED" + err));
    }

    render(){
        

        return (
            <React.Fragment>
                <img src = './images/bg.jpg' style={{position: "fixed", height: "100%", width: "100%", opacity: 0.5}}/>
                <Navbar style={{backgroundColor: "#1b5e20"}}>
                    <Nav className="m-auto flex-row" navbar>
                        <NavItem>
                            <h1 style={{color: "white"}}>JAI KISAAN</h1>
                        </NavItem>
                    </Nav>
                </Navbar>
                {!this.state.authorityLoggedIn && !this.state.officialLoggedIn 
                ?
                <Login authorityLogin={this.authorityLogin} officialLogin={this.officialLogin} />
                :
                this.state.authorityLoggedIn 
                ?
                <Authority addOfficial = {this.addOfficial}/>
                :
                this.state.officialLoggedIn
                ?
                <Official />
                :
                null
                }
            </React.Fragment>   
            

        );
    }
}

export default App;
