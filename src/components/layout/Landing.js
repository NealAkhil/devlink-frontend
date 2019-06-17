import React, { Component } from 'react'
import '../../css/Landing.css'
class Landing extends Component {
    render() {
        return (
            <div className="main-land">
                <div className="container">
                    <div className="row container-land">
                            <div className="col-sm">
                                <h1 className="heading-text"> Let's get connected professionally</h1>
                            </div>
                            <div className="col-sm ml-auto bggg">
                                One of three columns
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing;