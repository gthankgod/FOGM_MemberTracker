import React, { Component, Fragment } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)
        if (props.isAuthenticated) {
            props.history.push('/dashboard');
        }
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h3 className="mb-4">Add A New Member</h3>
                    <form method="POST" action="/members">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="First Name">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="Last Name">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="Gender">Gender</label>
                                <select name="gender" className="form-control">
                                    <option selected value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="Email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="Home Address">Home Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="homeAddress"
                                placeholder="1234 Main St"
                            />
                        </div>
                        <div className="form-group">
                            <label for="Work Address">Work Address </label>
                            <input
                                type="text"
                                className="form-control"
                                name="workAddress"
                                placeholder="Your Work Address"
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="Phone Number">Phone Number</label>
                                <input type="text" className="form-control" name="phoneNumber" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="Whatsapp Number">Whatsapp Number</label>
                                <input type="text" className="form-control" name="whatsappNumber" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="birthday">Birthday</label>
                                <input type="date" className="form-control" name="birthday" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="branch">Branch</label>
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
                                <label for="Unit">Unit</label>
                                <select name="unit" className="form-control">
                                    <option selected value="Choir">Choir</option>
                                    <option value="Media">Media</option>
                                    <option value="Ushering">Ushering</option>
                                    <option value="Intercessory">Intercessory</option>
                                    <option value="Children">Children</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Register;