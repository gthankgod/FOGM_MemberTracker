import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alerts = ({ alerts }) => {
    if (alerts.length > 0 && alerts) {
        return alerts.map(alert => <div className='container alert alert-success mt-2' key={alert.id}> {alert.msg}</div>)
    } else return null;
}

Alerts.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = ({ alerts }) => ({
    alerts
});

export default connect(mapStateToProps)(Alerts)
