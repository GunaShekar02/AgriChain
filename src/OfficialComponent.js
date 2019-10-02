import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Card, Button, CardTitle, CardBody, Row, Col, Input } from 'reactstrap';

class Official extends Component{
	constructor(props){
		super(props);
		this.state = {
			farmerName: '',
			farmerAddress: '',
			farmerPassword: '',
		}

		this.registerFarmer = this.registerFarmer.bind(this);
	}

	registerFarmer(){
		this.props.addFarmer(this.state.farmerAddress, this.state.farmerName, this.state.farmerPassword);
	}

	render(){
		return(
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
		);
	}
}

export default Official;