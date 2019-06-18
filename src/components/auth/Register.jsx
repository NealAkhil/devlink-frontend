import React, { Component } from 'react'
import '../../css/Login.css'
import {Link} from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div className="container">
                <div className="Login-comp">
                    <div className="Login-header">
                       <h5>Join Devlink</h5>
                        <div className="Login-container">
                            <span className="Login-field-text">Username or E-mail address</span>
                            <input type="text" className="form-control login-form" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                            <span className="Login-field-text">Full Name</span>
                            <input type="text" className="form-control login-form" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                            <div>
                                <span className="Login-field-text">Password</span>
                            </div>                            
                            <input type="text" className="form-control login-form" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                            <button className="btn login-btn">
                                Sign up
                            </button>
                        </div>
                        <div className="Login-container not-user" style={{marginTop:"20px"}}>
                            <div className="forgot-password">
                                Already signed up?<Link to="/login" className="forgot-password"> login here..</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;