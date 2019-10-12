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
            authorityLoggedIn: localStorage.getItem('al'),
            officialLoggedIn: localStorage.getItem('ol'),
            authorityPassword: localStorage.getItem('ap'),
            officialPassword: localStorage.getItem('op'),
            showLogin: false,
        }

        this.authorityLogin = this.authorityLogin.bind(this);
        this.officialLogin = this.officialLogin.bind(this);
        this.addOfficial = this.addOfficial.bind(this);
        this.addFarmer = this.addFarmer.bind(this);
        this.payFarmer = this.payFarmer.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        // const hash = new Keccak(256);
        // hash.update('hello');
        // console.log(hash.digest('hex'));
        // localStorage.setItem('pass','abc');
        this.loadBlockchainData();
        // changePassword();
        // console.log(localStorage.getItem('pass'));

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
            this.setState({showPrediction: false, showLogin: false})
            localStorage.setItem('al',true);
            localStorage.setItem('ap',hash.digest('hex'));
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
            this.setState({officialPassword : hash.digest('hex')});
            this.setState({showPrediction: false, showLogin: false})
            localStorage.setItem('ol',true);
            localStorage.setItem('op',hash.digest('hex'));
        })
        .catch(err => console.log("ERROR OCCURRED" + err));
    }

    logout(){
        localStorage.removeItem('ol');
        localStorage.removeItem('op');
        localStorage.removeItem('al');
        localStorage.removeItem('ap');
        this.setState({officialLoggedIn : false});
        this.setState({officialPassword : ''});
        this.setState({authorityLoggedIn : false});
        this.setState({authorityPassword : ''});
        this.setState({showPrediction: false, showLogin: true})
    }

    addOfficial(address,name,password,isValidator){
        const hash = new Keccak(256);
        hash.update(password);
        this.state.kisaan.methods.addOfficial(this.state.authorityPassword,address, name, hash.digest('hex'), isValidator).send({from: this.state.account})
        .once('transactionHash', async (transactionHash) => {
            console.log(transactionHash);           
        })
        .catch(err => console.log("ERROR OCCURRED" + err));
    }

    async addFarmer(address,name,password){
        const hash = new Keccak(256);
        hash.update(password);
        this.state.kisaan.methods.addFarmer(this.state.officialPassword,address, name, hash.digest('hex')).send({from: this.state.account})
        .once('transactionHash', async (transactionHash) => {
            console.log(transactionHash);
        })
        .catch(err => console.log("ERROR OCCURRED" + err));
    }

    async payFarmer(address, password, amount){
        const hash = new Keccak(256);
        hash.update(password);
        this.state.kisaan.methods.deposit().send({from: this.state.account, value: amount * Math.pow(10,18)})
        .once('transactionHash', async (transactionHash) => {
            console.log(transactionHash);
        })
        .catch(err => console.log("ERROR OCCURRED" + err));
        this.state.kisaan.methods.receivedGoods(this.state.officialPassword, hash.digest('hex'), address, amount).send({from: this.state.account})
        .once('transactionHash', async (transactionHash) => {
            console.log(transactionHash);

        })
        .catch(err => {
            console.log("ERROR OCCURRED" + err);
            this.state.kisaan.methods.withdraw(this.state.account).send({from: this.state.account})
            .once('transactionHash', async (transactionHash) => {
                console.log(transactionHash);
            })
            .catch(err => console.log("ERROR OCCURRED IN WITHDRAW" + err));
        });
    }

    render(){
        

        return (
            <React.Fragment>
                <img src = './images/bg.jpg' style={{position: "fixed", height: "100%", width: "100%", opacity: 0.5}}/>
                <Navbar style={{backgroundColor: "#1b5e20"}}>
                    <Nav className="flex-row" navbar>
                        <NavItem>
                            <a href="#"><h1 style={{color: "white"}} onClick={() => this.setState({showPrediction: false, showLogin: false})}>JAI KISAAN</h1></a>
                        </NavItem>
                        {!this.state.authorityLoggedIn && !this.state.officialLoggedIn
                            ?
                            <React.Fragment>
                        <NavItem>
                            <a href="#"><h3 style={{color: "white"}} className="mt-2 ml-5" onClick={() => this.setState({showLogin: true})}>Login</h3></a>
                        </NavItem>
                        </React.Fragment>
                        :
                        null
                        }
                       
                        <NavItem className="ml-auto">
                            {this.state.authorityLoggedIn || this.state.officialLoggedIn ? 
                             <Button color="primary" style={{marginLeft: 1050, marginTop: 10}} onClick={this.logout}>Logout</Button>
                            :
                            null
                            }
                        </NavItem>
                    </Nav>
                </Navbar>
                {!this.state.authorityLoggedIn && !this.state.officialLoggedIn && !this.state.showLogin
                ?
                <Row style={{ marginTop: "17vh", justifyContent: "center"}}>
                    <Col className="col-md-7" >
                        <Card style={{borderColor: "black", borderWidth: "3px"}}>
                            <CardTitle className="text-center" style={{backgroundColor: "#1b5e20", color: 'white', fontSize: 30}}>
                                About Jai Kisaan
                            </CardTitle>
                            <CardBody>
                                Jai Kisaan is an effort to make the best use of the Blockchain Technology to enhance the lives of farmers.
                                <br /><br />
                                We use Blockchain to manage the agricultural supply chain, to help farmers receive all the revenue they
                                are supposed to receive instead of those funds being stolen by middlemen.
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                :
                this.state.showLogin ?
                <Login authorityLogin={this.authorityLogin} officialLogin={this.officialLogin} />
                :
                this.state.authorityLoggedIn 
                ?
                <Authority addOfficial = {this.addOfficial}/>
                :
                this.state.officialLoggedIn
                ?
                <Official addFarmer = {this.addFarmer} payFarmer = {this.payFarmer}/>
                :
                null
                }
            </React.Fragment>   
            

        );
    }
}

export default App;
