import React, { Component } from 'react'
import '../../css/Navbar.css';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    render() {

        return (
                <nav className="navbar navbar-expand-md nav-el navbar-offse" data-spy="affix">
                    <div className="container">
                        <button className="navbar-toggler res-menu ml-auto" data-toggle="collapse" data-target="#collapse_target">
                            <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapse_target">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about"> About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/explore"> Explore</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/developers"> Developers</Link>
                                </li>
                            </ul>
                            
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item search-bar">         
                                    <input type="text" placeholder="Search Devlink" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}
export default Navbar;