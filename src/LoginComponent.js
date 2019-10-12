import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Card, Button, CardTitle, CardBody, Row, Col, Input, Label, Form, FormGroup } from 'reactstrap';

class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			authorityPassword: '',
			officialPassword: '',
		};

		this.handleAuthorityLogin = this.handleAuthorityLogin.bind(this);
		this.handleOfficialLogin = this.handleOfficialLogin.bind(this);
		// this.changedState = this.changedState.bind(this);
	}


	handleAuthorityLogin(){
		this.props.authorityLogin(this.state.authorityPassword);
	}

	handleOfficialLogin(){
		this.props.officialLogin(this.state.officialPassword);
	}

	render(){

		return(
			<React.Fragment>
				<Row style={{ marginTop: "25vh"}}>
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
		);
	}
}

export default Login;