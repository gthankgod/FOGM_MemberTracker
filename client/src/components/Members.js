import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getMembers } from '../actions/members'
import { Link } from 'react-router-dom'

const Members = ({ member, getMembers }) => {
    const { members } = member;
    console.log(members);
    useEffect(() => {
        getMembers();
    }, []);

    return (
        <div className="container">
            <Link to="/dashboard" className="btn btn-secondary my-3">Back to Dashboard</Link>
            <div className="table-responsive text-nowrap mt-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Whatsapp Number</th>
                            <th scope="col">Home Address</th>
                            <th scope="col">Work Address</th>
                            <th scope="col">Branch</th>
                            <th scope="col">Birthday</th>
                            <th scope="col">Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members && members.length > 0 && members.map((member, index) => {
                            return (
                                <tr key={member._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{member.firstname} {member.lastname}</td>
                                    <td>{member.username}</td>
                                    <td>{member.email}</td>
                                    <td>{member.gender}</td>
                                    <td>{member.phonenumber}</td>
                                    <td>{member.whatsappnumber}</td>
                                    <td>{member.homeaddress}</td>
                                    <td>{member.workaddress}</td>
                                    <td>{member.branch}</td>
                                    <td>{member.birthday}</td>
                                    <td>{member.unit}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

Members.propTypes = {
    member: PropTypes.object.isRequired,
    getMembers: PropTypes.func.isRequired
}

const mapStateToProps = ({ member }) => ({
    member
});

export default connect(mapStateToProps, { getMembers })(Members);
