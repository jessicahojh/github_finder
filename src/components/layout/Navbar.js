import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {
    static defaultProps = {
        title: 'This will be default title',
        icon: 'This will be default icon'
        // default if no props were passed in App.js
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
        // will get an error if prop passed in is not a string
    };

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon} /> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
