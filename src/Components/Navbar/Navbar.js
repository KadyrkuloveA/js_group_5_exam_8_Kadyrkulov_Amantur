import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from './quotation.png';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="QuotesCentral" width="32" height="32"/>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' exact className="nav-link">Quotes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/submit' className="nav-link">Submit New</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;