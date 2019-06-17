import React, { Component } from 'react'
import '../../css/Navbar.css';
class Navbar extends Component {
    render() {

        return (
            <div className="nav-el fixed-top">
                <nav className="navbar navbar-expand-md">
                    <div className="container">
                        <button className="navbar-toggler res-menu ml-auto" data-toggle="collapse" data-target="#collapse_target">
                            <span className="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapse_target">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Explore</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Developers</a>
                                </li>
                            </ul>
                            
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item search-bar">         
                                    <input type="text" placeholder="Search Devlink" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="register.html">Sign Up</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="login.html">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;