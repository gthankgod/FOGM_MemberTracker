import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

const Dashboard = ({ isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Redirect to="/login" />
    }
    return (
        <div className="container-fluid" style={{ backgroundColor: '#F6F6F6' }}>
            <div className="row " id="body-row">
                <div className="col p-0 w-25">
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
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#exampleModal7"
                                >
                                    Add Family
                                </button>
                                <div
                                    className="modal fade py-3"
                                    id="exampleModal7"
                                    tabIndex="-1"
                                    role="dialog"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel"> Add Family </h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form method="POST" action="/members/family">
                                                    <div className="form-row">
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="First Name">Family Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="familyName"
                                                                placeholder="Please Enter the surname of the Head of family..."
                                                            />
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary btn-block">
                                                        Add family
                        </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                    <div className="row details">
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="shadow card">
                                <div className="card-body p-0">
                                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal"
                                        style={{ display: 'inline-block', padding: '10px 20px' }} >
                                        <h5 className="card-title text-muted pt-2">All Members Details</h5>
                                    </div>
                                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn"
                                        style={{ display: 'inline-block' }}>
                                        <div className="btn-group dropdown" style={{ position: 'absolute', right: '5px', top: '10px' }}>
                                            <button type="button" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false" className="btn-icon btn-icon-only btn btn-link">
                                                <i className="fas fa-ellipsis-v btn-icon-wrapper"></i>
                                            </button>
                                            <div tabIndex="-1" role="menu" aria-hidden="true"
                                                className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link dropdown-menu"
                                                x-placement="top-end"
                                                style={{ position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(-212px, -239px, 0px)' }}>
                                                <button type="button" tabIndex="0" className="dropdown-item"><i
                                                    className="dropdown-icon lnr-inbox"> </i><Link to="newUsers.html"
                                                        className="more-details">More details</Link></button>

                                            </div>
                                        </div>
                                    </div>
                                    <p className="card-text pb-2 border-top pt-2 text-center"
                                        style={{ color: 'black', fontSize: '40px', fontWeight: '500' }}>200</p>
                                </div>
                                <div className="card-footer pb-5 " style={{ backgroundColor: '#EAEAEA' }}></div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="shadow card">
                                <div className="card-body p-0">
                                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal"
                                        style={{ display: 'inline-block', padding: '10px 20px' }}>
                                        <h5 className="card-title text-muted pt-2">Families</h5>
                                    </div>
                                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn"
                                        style={{ display: "inline-block" }}>
                                        <div className="btn-group dropdown" style={{ position: 'absolute', right: '5px', top: '10px' }}>
                                            <button type="button" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false" className="btn-icon btn-icon-only btn btn-link">
                                                <i className="fas fa-ellipsis-v btn-icon-wrapper"></i>
                                            </button>
                                            <div tabIndex="-1" role="menu" aria-hidden="true"
                                                className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link dropdown-menu"
                                                x-placement="top-end"
                                                style={{ position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(-212px, -239px, 0px)' }}>
                                                <button type="button" tabIndex="0" className="dropdown-item"><i
                                                    className="dropdown-icon lnr-inbox"> </i><Link to="desktop10.html"
                                                        className="more-details">More details</Link></button>

                                            </div>
                                        </div>
                                    </div>
                                    <p className="card-text pb-2 border-top pt-2 text-center"
                                        style={{ color: 'orange', fontSize: '40px', fontWeight: '500' }}>12</p>
                                </div>
                                <div className="card-footer pb-5 " style={{ backgroundColor: '#EAEAEA' }}></div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="shadow card">
                                <div className="card-body p-0">
                                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal"
                                        style={{ display: 'inline-block', padding: '10px 20px' }}>
                                        <h5 className="card-title text-muted pt-2">Units</h5>
                                    </div>
                                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn"
                                        style={{ display: 'inline-block' }}>
                                        <div className="btn-group dropdown" style={{ position: 'absolute', right: '5px', top: '10px' }}>
                                            <button type="button" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false" className="btn-icon btn-icon-only btn btn-link">
                                                <i className="fas fa-ellipsis-v btn-icon-wrapper"></i>
                                            </button>
                                            <div tabIndex="-1" role="menu" aria-hidden="true"
                                                className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link dropdown-menu"
                                                x-placement="top-end"
                                                style={{ position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(-212px, -239px, 0px)' }}>
                                                <button type="button" tabIndex="0" className="dropdown-item"><i
                                                    className="dropdown-icon lnr-inbox"> </i><Link to="desktop9.html"
                                                        className="more-details">More details</Link></button>

                                            </div>
                                        </div>
                                    </div>
                                    <p className="card-text pb-2 border-top pt-2 text-center"
                                        style={{ color: 'red', fontSize: '40px', fontWeight: '500' }}>17</p>
                                </div>
                                <div className="card-footer pb-5 " style={{ backgroundColor: '#EAEAEA' }}></div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="shadow card">
                                <div className="card-body p-0">
                                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal"
                                        style={{ display: 'inline-block', padding: '10px 20px' }}>
                                        <h5 className="card-title text-muted pt-2">Messages</h5>
                                    </div>
                                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn"
                                        style={{ display: 'inline-block' }}>
                                        <div className="btn-group dropdown" style={{ position: 'absolute', right: '5px', top: '10px' }}>
                                            <button type="button" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false" className="btn-icon btn-icon-only btn btn-link">
                                                <i className="fas fa-ellipsis-v btn-icon-wrapper"></i>
                                            </button>
                                            <div tabIndex="-1" role="menu" aria-hidden="true"
                                                className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link dropdown-menu"
                                                x-placement="top-end"
                                                style={{ position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(-212px, -239px, 0px)' }}>
                                                <button type="button" tabIndex="0" className="dropdown-item"><i
                                                    className="dropdown-icon lnr-inbox"> </i><Link to="desktop11,.html"
                                                        className="more-details">More details</Link></button>

                                            </div>
                                        </div>
                                    </div>
                                    <p className="card-text pb-2 border-top pt-2 text-center"
                                        style={{ color: 'purple', fontSize: '40px', fontWeight: '500' }}>25</p>
                                </div>
                                <div className="card-footer pb-5 " style={{ backgroundColor: '#EAEAEA' }}></div>
                            </div>
                        </div>
                        <div className="col card">
                            <h2 className="section-heading pt-4 text-muted">Members Details</h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
});
export default connect(mapStateToProps)(Dashboard)
