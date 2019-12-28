import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Login = ({ isAuthenticated, login, history }) => {
    const [inputState, setInputState] = useState({
        username: '',
        password: ''
    });

    const onChangeHandler = (e) => {
        setInputState({ ...inputState, [e.target.name]: e.target.value })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        login(inputState);
        history.push("/dashboard");

    }
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }
    return (
        <div className="container">
            <div className="row">
                <h3>Member Login</h3>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="Username">Username address</label>
                        <input type="Username" className="form-control" name="username" placeholder="Enter Username" value={inputState.username} onChange={(e) => onChangeHandler(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password" value={inputState.password} onChange={(e) => onChangeHandler(e)} />
                        <small id="PasswordHelp" className="form-text text-muted">Please do not share your Password with anyone else.</small>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}


Login.propTypes = {
    login: PropTypes.func.isRequired
}
const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
})
export default connect(mapStateToProps, { login })(Login);