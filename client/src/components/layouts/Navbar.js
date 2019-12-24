import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="navbar-fixed">
            <nav>
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">Member Tracker</Link>
                    <ul className="right">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register a Member</Link></li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
