import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import setAlert from '../actions/alerts'
import { register } from '../actions/auth'

const Register = ({ history, isAuthenticated, setAlert, register }) => {
    const [inputState, setInputState] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        email: '',
        homeaddress: '',
        workaddress: '',
        phonenumber: '',
        whatsappnumber: '',
        birthday: '',
        branch: '',
        username: '',
        unit: '',
        password: ''
    });

    const onChangeHandler = (e) => {
        setInputState({ ...inputState, [e.target.name]: e.target.value })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!inputState.firstname) {
            return setAlert('Firstname is required', 'red')
        }

        if (!inputState.lastname) {
            return setAlert('Lastname is required', 'red')
        }

        if (!inputState.gender) {
            return setAlert('Gender is required', 'red')
        }

        if (!inputState.email) {
            return setAlert('Email is required', 'red')
        }

        if (!inputState.homeaddress) {
            return setAlert('Home Address is required', 'red')
        }

        if (!inputState.workaddress) {
            return setAlert('Work Address is required', 'red')
        }

        if (!inputState.phonenumber) {
            return setAlert('Phone Number is required', 'red')
        }

        if (!inputState.whatsappnumber) {
            return setAlert('Whatsapp number is required', 'red')
        }

        if (!inputState.birthday) {
            return setAlert('Birthday is required', 'red')
        }

        if (!inputState.branch) {
            return setAlert('Branch is required', 'red')
        }

        if (!inputState.username) {
            return setAlert('Username is required', 'red')
        }

        if (!inputState.unit) {
            return setAlert('Unit is required', 'red')
        }
        register(inputState);
        setAlert('User registered Successfully');
        history.push("/dashboard");

    }
    if (!isAuthenticated) {
        return <Redirect to="/login" />
    }
    return (
        <Fragment>
            <div className="container mt-4">
                <h3>Register a Member</h3>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="First Name">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                placeholder="First Name"
                                value={inputState.firstname}
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Last Name">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastname"
                                placeholder="Last Name"
                                value={inputState.lastname}
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="Gender">Gender</label>
                            <select name="gender" className="form-control" value={inputState.gender} onChange={(e) => onChangeHandler(e)}>
                                <option value="">Choose a gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="Email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                value={inputState.email}
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Home Address">Home Address</label>
                        <input
                            type="text"
                            className="form-control"
                            name="homeaddress"
                            placeholder="1234 Main St"
                            value={inputState.homeaddress}
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Work Address">Work Address </label>
                        <input
                            type="text"
                            className="form-control"
                            name="workaddress"
                            placeholder="Your Work Address"
                            value={inputState.workaddress}
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="Phone Number">Phone Number</label>
                            <input type="text" className="form-control" name="phonenumber" value={inputState.phonenumber} onChange={(e) => onChangeHandler(e)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Whatsapp Number">Whatsapp Number</label>
                            <input type="text" className="form-control" name="whatsappnumber" value={inputState.whatsappnumber} onChange={(e) => onChangeHandler(e)} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" className="form-control" name="birthday" value={inputState.birthday} onChange={(e) => onChangeHandler(e)} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="branch">Branch</label>
                            <select name="branch" className="form-control" value={inputState.branch} onChange={(e) => onChangeHandler(e)}>
                                <option value="">Choose a Branch</option>
                                <option value="Headquarters">Headquarters</option>
                                <option value="Koloko">Koloko</option>
                                <option value="Mokola">Mokola</option>
                                <option value="Alakia">Alakia</option>
                                <option value="Eleyele">Eleyele</option>
                                <option value="Kusela">Kusela</option>
                                <option value="Arulogun">Arulogun</option>
                                <option value="Olodo">Olodo</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="Unit">Unit</label>
                            <select name="unit" className="form-control" value={inputState.unit} onChange={(e) => onChangeHandler(e)}>
                                <option value="">Choose a unit</option>
                                <option value="Choir">Choir</option>
                                <option value="Media">Media</option>
                                <option value="Ushering">Ushering</option>
                                <option value="Intercessory">Intercessory</option>
                                <option value="Children">Children</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input type="Username" className="form-control" name="username" placeholder="Enter Username" value={inputState.username} onChange={(e) => onChangeHandler(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password" value={inputState.password} onChange={(e) => onChangeHandler(e)} />
                        <small id="PasswordHelp" className="form-text text-muted">Please do not share your password with anyone else.</small>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </Fragment>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
}
const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
})
export default connect(mapStateToProps, { setAlert, register })(Register);