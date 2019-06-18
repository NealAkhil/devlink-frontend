import React, { Component } from 'react'
import '../../css/Landing.css'
class Landing extends Component {
    render() {
        return (
            <div className="main-div">
                <div className="container">
                    <div className="row container-land">
                            <div className="col-sm left-div">
                                <h1 className="heading-text"> Let's get connected professionally</h1>
                                <button className="btn">
                                    Get Started
                                </button>
                            </div>
                            <div className="col-sm ml-auto right-div">
                                
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing;