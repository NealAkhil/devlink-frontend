import React, { Component } from 'react'
import '../../css/Login.css'
import {Link} from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="Login-comp">
                    <div className="Login-header">
                       <h5>Login to Devlink</h5>
                        <div className="Login-container">
                            <span className="Login-field-text">Username or E-mail address</span>
                            <input type="text" className="form-control login-form" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                            <div>
                                <span className="Login-field-text">Password</span>
                            </div>                            
                            <input type="text" className="form-control login-form" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                            <div className="forgot-password">
                                <Link to="/forgot-password" className="forgot-password"> Forgot password?</Link>
                            </div>
                            <button className="btn login-btn">
                                login
                            </button>
                        </div>
                        <div className="Login-container not-user" style={{marginTop:"20px"}}>
                            <div className="forgot-password">
                                New to Devlink?<Link to="/register" className="forgot-password"> Register here..</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;