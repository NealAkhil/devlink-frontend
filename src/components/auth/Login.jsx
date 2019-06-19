import React, { Component } from 'react'
import '../../css/Login.css'
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            errors:""
        }
        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    onSubmit(e){
        e.preventDefault();
        const user={
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user);
    }
    render() {
        return (
            <div className="container">
                <div className="Login-comp">
                <form onSubmit={this.onSubmit}>
                <div className="Login-header">
                       <h5>Login to Devlink</h5>
                        <div className="Login-container">
                            <span className="Login-field-text">Username or E-mail address</span>
                            <input 
                                type="text" 
                                className="form-control login-form" 
                                aria-label="Small" 
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            <div>
                                <span className="Login-field-text">Password</span>
                            </div>                            
                            <input 
                                type="password" 
                                className="form-control login-form" 
                                aria-label="Small"
                                name="password" 
                                value={this.state.password}
                                onChange={this.onChange}
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            <div className="forgot-password">
                                <Link to="/forgot-password" className="forgot-password"> Forgot password?</Link>
                            </div>
                            <button type="submit" className="btn login-btn submit">
                                login
                            </button>
                        </div>
                        <div className="Login-container not-user" style={{marginTop:"20px"}}>
                            <div className="forgot-password">
                                New to Devlink?<Link to="/register" className="forgot-password"> Register here..</Link>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
export default Login;