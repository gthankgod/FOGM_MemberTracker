import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import PropTypes from 'prop-types';

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.login(this.state);
    }
    render() {
        return (
            <div className="row">
                <h3>Member Login</h3>
                <form className="col s12" onSubmit={this.onSubmitHandler}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="username" type="text" className="validate" value={this.state.username} onChange={this.onChangeHandler} />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-field col s12">
                            <input name="password" type="text" className="validate" value={this.state.password} onChange={this.onChangeHandler} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn">Submit</button>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(Login);