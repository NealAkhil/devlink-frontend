import React, { Component } from 'react'
import '../../css/Login.css'
import {Link} from 'react-router-dom';
// import axios
import axios from 'axios';
import classnames from 'classnames';
class Register extends Component {
    constructor(props){
        super(props);
        this.state= {
            name:"",
            email:"",
            password:"",
            password2:"",
            errors:{
                errors: {}
            }
        };
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
        const newUser={
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        axios.post('/api/users/register',newUser)
            .then(res=>console.log(res.data))
            .catch(err=>{
                this.setState({errors: err.response.data.errors })
                // console.log("this is after error",this.state.errors)
            });
    }
    render() {
        // destructing the state errors or other details
        // let errorEmail;
        const {errors}= this.state;
        console.log('Fucking errors', errors);
        // console.log('email',errors.errors && errors.errors.email)
        return (
            <div className="container">
                <div className="Login-comp">
                    <div className="Login-header">
                       <h5>Join Devlink</h5>
                       <form onSubmit={this.onSubmit}>
                        <div className="Login-container form-group">
                            <span className="Login-field-text">Username or E-mail address</span>
                            <input  
                                type="text" 
                                className={classnames('form-control','form-control-lg','login-form',{
                                    "is-invalid": this.state.errors && this.state.errors.email
                                })} 
                                aria-label="Small" 
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                aria-describedby="inputGroupPrepend"
                            />
                                {errors.email && <p className="invalid-feedback">{errors.email}</p>}
                            <span className="Login-field-text">Full Name</span>
                            <input 
                                type="text" 
                                className={classnames('form-control form-control-lg login-form', {
                                    "is-invalid": this.state.errors.name
                                })} 
                                aria-label="Small"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            {errors.name && <p className="invalid-feedback">{errors.name}</p>}
                            <div>
                                <span className="Login-field-text">Password</span>
                            </div>                            
                            <input 
                                type="password"
                                name="password" 
                                className={classnames("form-control login-form form-control-lg",{
                                    "is-invalid": this.state.errors.password
                                } )}
                                aria-label="Small" 
                                value={this.state.email.password}
                                onChange={this.onChange}
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            {errors.password && <p className="invalid-feedback">{errors.password}</p>}
                            <div>
                                <span className="Login-field-text">Re-Enter Password</span>
                            </div>                            
                            <input 
                                type="password" 
                                className={classnames("form-control login-form form-control-lg",{
                                    "is-invalid": this.state.errors.password2
                                } )} 
                                aria-label="Small" 
                                name="password2"
                                value={this.state.password2}
                                onChange={this.onChange}
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            {errors.password2 && <p className="invalid-feedback">{errors.password2}</p>}
                             <button type="submit" className="btn login-btn submit">
                                Sign up
                            </button>
                        </div>
                        </form>
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