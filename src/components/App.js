import React, {Component} from "react";

import "../App.scss";


import {library} from "@fortawesome/fontawesome-svg-core";
import {Container, Row,Col} from 'react-bootstrap';

import {
    faCheckSquare,
    faPlusCircle,
    faUpload,
    faDownload,
    faLink,
    faCheck,
    faTimes,
    faFile,
    faExclamation
} from "@fortawesome/free-solid-svg-icons";
import AdminDashboard from "./devApp/AdminDashboard";
import AdminLogin from "./devApp/AdminLogin";
import AdminRegister from "./devApp/AdminRegister";

library.add(faCheckSquare,faPlusCircle, faUpload, faDownload, faLink, faCheck, faTimes, faFile,faExclamation);

class App extends Component {
    state = {

        adminUsername: '',
        adminPassword: '',
        showLoginForm: false,
        showRegisterForm: true
    };
    toggleForms = (form) => {
        if(form === 'loginForm'){
            this.setState({showLoginForm: true, showRegisterForm: false})
        }else{
            this.setState({showLoginForm: false, showRegisterForm: true})
        }
    }


    render() {
        if (localStorage.getItem('adminUsername'), localStorage.getItem('adminPassword')) {
            return (


                <AdminDashboard setRoute={(route) => {
                    this.props.history.push(route)
                }}/>

            );
        } else {
            return (
                <Container className={'admin-auth'}>
                    <Row>
                        <Col md={12}>
                        <h1 className={'title'}>CypherPress</h1>
                            </Col>
                    </Row>
                    <Row>
                        <Col md={4}/>
                        <Col md={4} className={'dashboard-buttons'}>
                            <span className={this.state.showLoginForm?'active':''} onClick={()=>{this.setState({showLoginForm: true, showRegisterForm:false})}}> Login </span>
                            <span className={this.state.showRegisterForm?'active':''} onClick={()=> {this.setState({showLoginForm:false, showRegisterForm:true})}}>Register</span>
                        </Col>
                    </Row>
                    <Row className={this.state.showLoginForm? null:'hidden'}>
                        <Col md={3}/>
                        <Col md={6}>

                        <AdminLogin
                            setUsername={(username) => {
                                this.setState({adminUsername: username})
                            }}
                            setPassword={(password) => {
                                this.setState({adminPassword: password})
                            }}/>
                            </Col>

                    </Row>
                    <Row className={this.state.showRegisterForm? null:'hidden'}>
                        <Col md={3}/>
                        <Col md={6}>
                        <AdminRegister
                            setUsername={(username) => {
                                this.setState({adminUsername: username})
                            }}
                            setPassword={(password) => {
                                this.setState({adminPassword: password})
                            }}/>
                        </Col>
                    </Row>

                </Container>
            );
        }


    }
}

export default App;
