import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Members = props => {
    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <h4 class="mb-4">All Members</h4>
            <Link type="button" class="btn btn-success mb-4" to="/dashboard"
            >Back to Dashboard</Link>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birthday</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Home Address</th>
                        <th>Branch</th>
                        <th>Role</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">ThankGod George</th>
                        <td> member.gender</td>
                        <td> member.birthday</td>
                        <td> member.email</td>
                        <td> member.phoneNumber</td>
                        <td> member.homeAddress</td>
                        <td> member.branch</td>
                        <td> member.role</td>
                        <td> member.unit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Members.propTypes = {

}

export default Members
