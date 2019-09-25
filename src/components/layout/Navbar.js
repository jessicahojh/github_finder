import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


 const Navbar = (props) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={props.icon} /> {props.title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'This will be default title',
    icon: 'This will be default icon'
    // default if no props were passed in App.js
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
    // will get an error if prop passed in is not a string
};

export default Navbar
