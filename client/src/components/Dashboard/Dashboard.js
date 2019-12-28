import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

const Dashboard = ({ isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Redirect to="/login" />
    }
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="jumbotron">
                            <h4>Members Database and Attendance Tracker</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aspernatur nisi atque, nemo aliquam quibusdam temporibus itaque?
                                Dignissimos ipsam quos amet consectetur doloribus quae nesciunt
                                non?
                    </p>

                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
});
export default connect(mapStateToProps)(Dashboard)
