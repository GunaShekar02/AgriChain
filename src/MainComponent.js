import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Card, Button, CardTitle, CardBody, Row, Col, Input } from 'reactstrap';

class Main extends Component{

	constructor(props){
		super(props);
		console.log(props.authorityLogin);

		this.state = {
			authorityPassword: '',
			officialPassword: '',
			authorityLoggedIn: false,
			officialLoggedIn : false
		}

		this.handleAuthorityLogin = this.handleAuthorityLogin.bind(this);
	}

	handleAuthorityLogin(){
		this.props.authorityLogin(this.state.authorityPassword);
	}

	handleOfficialLogin(){
		this.props.authorityLogin(this.state.authorityPassword);
	}

	render(){
		return(
			<React.Fragment>
				<img src = './images/bg.jpg' style={{position: "fixed", height: "100%", width: "100%", opacity: 0.5}}/>

				<Navbar style={{backgroundColor: "#1b5e20"}}>
					<Nav className="m-auto flex-row" navbar>
						<NavItem>
							<h1 style={{color: "white"}}>JAI KISAAN</h1>
						</NavItem>
					</Nav>
				</Navbar>
			{!this.state.authorityLoggedIn ? 
				!this.state.officialLoggedIn ?
			<React.Fragment>
				

				<Row style={{ marginTop: "30vh"}}>
					<Col className="col-md-5 mx-5">
						<Card style={{borderColor: "black", borderWidth: "3px"}}>
							<CardTitle className="text-center" style={{backgroundColor: "#1b5e20", color: 'white', fontSize: 30}}>
								Central Authority Login
							</CardTitle>
							<CardBody>
								<Row>
									<Col className = "col-md-4 my-auto">
										Enter Password : 
									</Col>
									<Col className = "col-md">
										<Input placeholder="Password" type="password" onChange={(event) => this.setState({authorityPassword: event.target.value})}/>
									</Col>
								</Row>
								<Row style={{justifyContent: 'center'}} className="mt-3">
									<Button style={{backgroundColor: "#1b5e20"}} onClick={this.handleAuthorityLogin}>
										Login
									</Button>
								</Row>
							</CardBody>
						</Card>
					</Col>

					<Col className="col-md-5 mx-5">
						<Card style={{borderColor: "black", borderWidth: "3px"}}>
							<CardTitle className="text-center" style={{backgroundColor: "#1b5e20", color: 'white', fontSize: 30}}>
								Government Official Login
							</CardTitle>
							<CardBody>
								<Row>
									<Col className = "col-md-4 my-auto">
										Enter Password : 
									</Col>
									<Col className = "col-md">
										<Input placeholder="Password" type="password" onChange={(event) => this.setState({officialPassword: event.target.value})}/>
									</Col>
								</Row>
								<Row style={{justifyContent: 'center'}} className="mt-3">
									<Button style={{backgroundColor: "#1b5e20"}} onClick={this.handleOfficialLogin}>
										Login
									</Button>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</React.Fragment>
			:
			<React.Fragment>
				<Row style={{ marginTop: "20vh"}}>
					<Col className="col-md-5 mx-5" >
						<Card style={{borderColor: "black", borderWidth: "3px"}}>
							<CardTitle className="text-center" style={{backgroundColor: "#1b5e20", color: 'white', fontSize: 30}}>
								Register Farmer
							</CardTitle>
							<CardBody>
								<Row>
									<Col className = "col-md-5 my-auto">
										Name : 
									</Col>
									<Col className = "col-md">
										<Input placeholder="Name" onChange={(event) => this.setState({farmerName: event.target.value})}/>
									</Col>
								</Row>
								<Row className="mt-3">
									<Col className = "col-md-5 my-auto">
										Account Address :
									</Col>
									<Col className = "col-md">
										<Input placeholder="Address" onChange={(event) => this.setState({farmerAddress: event.target.value})}/>
									</Col>
								</Row>
								<Row className="mt-3">
									<Col className = "col-md-5 my-auto">
										Password : 
									</Col>
									<Col className = "col-md">
										<Input placeholder="Password" type="password" onChange={(event) => this.setState({farmerPassword: event.target.value})}/>
									</Col>
								</Row>
								<Row style={{justifyContent: 'center'}} className="mt-3">
									<Button style={{backgroundColor: "#1b5e20"}} onClick={this.registerFarmer}>
										Register
									</Button>
								</Row>
							</CardBody>
						</Card>
					</Col>
					<Col className="col-md-5 mx-5" >
						<Card style={{borderColor: "black", borderWidth: "3px"}}>
							<CardTitle className="text-center" style={{backgroundColor: "#1b5e20", color: 'white', fontSize: 30}}>
								Pay Farmer
							</CardTitle>
							<CardBody>
								<Row>
									<Col className = "col-md-5 my-auto">
										Account Address :
									</Col>
									<Col className = "col-md">
										<Input placeholder="Address" onChange={(event) => this.setState({payAddress: event.target.value})}/>
									</Col>
								</Row>
								<Row className="mt-3">
									<Col className = "col-md-5 my-auto">
										Password : 
									</Col>
									<Col className = "col-md">
										<Input placeholder="Password" type="password" onChange={(event) => this.setState({payPassword: event.target.value})}/>
									</Col>
								</Row>
								<Row className="mt-3">
									<Col className = "col-md-5 my-auto">
										Amount : 
									</Col>
									<Col className = "col-md">
										<Input placeholder="Amount" onChange={(event) => this.setState({payAmount: event.target.value})}/>
									</Col>
								</Row>
								<Row style={{justifyContent: 'center'}} className="mt-3">
									<Button style={{backgroundColor: "#1b5e20"}} onClick={this.payFarmer}>
										Pay
									</Button>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</React.Fragment>
			:
			<React.Fragment>
				<Row style={{ marginTop: "15vh", justifyContent: "center"}}>
					<Col className="col-md-5" >
						<Card style={{borderColor: "black", borderWidth: "3px"}}>
							<CardTitle className="text-center" style={{backgroundColor: "#1b5e20", color: 'white', fontSize: 30}}>
								Register Official
							</CardTitle>
							<CardBody>
								<Row>
									<Col className = "col-md-5 my-auto">
										Name : 
									</Col>
									<Col className = "col-md">
										<Input placeholder="Name" onChange={(event) => this.setState({officialName: event.target.value})}/>
									</Col>
								</Row>
								<Row className="mt-3">
									<Col className = "col-md-5 my-auto">
										Account Address :
									</Col>
									<Col className = "col-md">
										<Input placeholder="Address" onChange={(event) => this.setState({officialAddress: event.target.value})}/>
									</Col>
								</Row>
								<Row className="mt-3">
									<Col className = "col-md-5 my-auto">
										Password : 
									</Col>
									<Col className = "col-md">
										<Input placeholder="Password" type="password" onChange={(event) => this.setState({officialPassword: event.target.value})}/>
									</Col>
								</Row>
								<Row className="mt-3">
									<Col className = "col-md-5 my-auto">
										Validator : 
									</Col>
									<Col className = "col-md">
										<Input placeholder="Validator" onChange={(event) => this.setState({isValidator: event.target.value})}/>
									</Col>
								</Row>
								<Row style={{justifyContent: 'center'}} className="mt-3">
									<Button style={{backgroundColor: "#1b5e20"}} onClick={this.registerOfficial}>
										Register
									</Button>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</React.Fragment>}


			</React.Fragment>
		);
	}
}

export default Main;