import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Card, Button, CardTitle, CardBody, Row, Col, Input } from 'reactstrap';

class Main extends Component{

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

				<Row style={{ marginTop: "30vh"}}>
					<Col className="col-md-5 mx-5">
						<Card style={{borderColor: "black", borderWidth: "3px"}}>
							<CardTitle className="text-center" style={{backgroundColor: "#1b5e20", color: 'white', fontSize: 30}}>
								Central Authority Login
							</CardTitle>
							<CardBody>

								<Row>
									<Col className = "col-md-5 my-auto">
										Enter Password : 
									</Col>
									<Col className = "col-md ">
										<Input placeholder="Password" />
									</Col>

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
									<Col className = "col-md-5 my-auto">
										Enter Password : 
									</Col>
									<Col className = "col-md ">
										<Input placeholder="Password" />
									</Col>

								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>

			</React.Fragment>
		);
	}
}

export default Main;