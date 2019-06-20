import React, { Component } from 'react'

export default class HelloWord extends Component {
    render() {
        return (
            <div>
                <h1>Hello World <br></br>{this.props.tech}</h1>
            </div>
        )
    }
}
