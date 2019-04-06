import React from 'react';
import {Form, Button} from 'react-bootstrap';

export default class AdminLogin extends React.Component {
    state = {
        username: '',
        password: ''
    }
    setPassword = (e) => {

        this.setState({password: e.target.value})
    }
    setUsername = (e) => {
        this.setState({username: e.target.value})
    }
    handleSubmit = () => {
        // check from server for login
        this.props.setUsername(this.state.username);
        this.props.setPassword(this.state.password);
        localStorage.setItem('adminUsername', this.state.username)
        localStorage.setItem('adminPassword', this.state.password)

    }

    render() {
        return (

            <Form className={'app-form'}>
                <h1> Login Using Existing Account</h1>
                <Form.Group controlId="formBasicEmail">
                    <h2><Form.Label>Username</Form.Label></h2>
                    <Form.Control type="text" placeholder="Enter Username" onChange={(e) => {
                        this.setUsername(e)
                    }}/>
                    <Form.Text className="text-muted">
                        Enter your username
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <h2>
                        <Form.Label>Password</Form.Label>
                    </h2>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => {
                        this.setPassword(e)
                    }}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleSubmit} className={'button'}>
                    Login
                </Button>
            </Form>
        )
    }
}