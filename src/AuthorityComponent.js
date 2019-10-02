import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Card, Button, CardTitle, CardBody, Row, Col, Input } from 'reactstrap';

class Authority extends Component{
	constructor(props){
		super(props);
		this.state = {
			officialName: '',
			officialAddress: '',
			officialPassword: '',
			isValidator: '',
		};

		this.registerOfficial = this.registerOfficial.bind(this);
	}

	registerOfficial(){
		this.props.addOfficial(this.state.officialAddress, this.state.officialName, this.state.officialPassword, this.state.isValidator=='true' ? true : false);
	}

	render(){
		return(
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
			</React.Fragment>
		);
	}
}

export default Authority;