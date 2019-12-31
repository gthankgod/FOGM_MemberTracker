import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

const Register = ({ history, isAuthenticated }) => {
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
                                name="firstName"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Last Name">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="Gender">Gender</label>
                            <select name="gender" className="form-control">
                                <option selected value="Male">Male</option>
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
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Home Address">Home Address</label>
                        <input
                            type="text"
                            className="form-control"
                            name="homeAddress"
                            placeholder="1234 Main St"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Work Address">Work Address </label>
                        <input
                            type="text"
                            className="form-control"
                            name="workAddress"
                            placeholder="Your Work Address"
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="Phone Number">Phone Number</label>
                            <input type="text" className="form-control" name="phoneNumber" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Whatsapp Number">Whatsapp Number</label>
                            <input type="text" className="form-control" name="whatsappNumber" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" className="form-control" name="birthday" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="branch">Branch</label>
                            <select name="branch" className="form-control">
                                <option selected value="Headquarters">Headquarters</option>
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
                            <select name="unit" className="form-control">
                                <option selected value="Choir">Choir</option>
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
    // register: PropTypes.func.isRequired
}
const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
})
export default connect(mapStateToProps)(Register);