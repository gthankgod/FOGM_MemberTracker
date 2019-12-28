import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

const Navbar = ({ isAuthenticated }) => {

    const Nav = isAuthenticated ? (
        (
            <Fragment>
                <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    ) : (
            <Fragment>
                <Link className="navbar-brand" to="/">Member Tracker</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </Fragment>
        );
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container">
                {Nav}
            </div>

        </nav>
    )
}

Navbar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
});
export default connect(mapStateToProps)(Navbar)
